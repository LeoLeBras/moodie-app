/* @flow */
/* eslint no-duplicate-imports: 0 */
/* eslint react/no-did-mount-set-state: 0 */

import { Component } from 'react'
import { NativeAppEventEmitter } from 'react-native'
import AppleHealthKit from 'react-native-apple-healthkit'
import _ from 'lodash'
import initialyze from './initialyze'
import type { Permissions } from './initialyze'

type Data = {
  [key: string]: Object,
}

type Props = {
  children?: () => React$Element<any>,
  permissions: Permissions,
  read?: { [key: string]: () => Promise<any> },
  onReadSuccess?: (data: Data) => void,
  onReadFailure?: (error: Object) => void,
  polling?: number,
}

type State = {
  data: Data,
  error: any,
  isLoading: boolean,
  isInitialyzed: boolean,
}

class HealthKit extends Component<void, Props, State> {

  timer: any
  listenner: any
  props: Props
  state: State = {
    error: false,
    data: {},
    isInitialyzed: false,
    isLoading: true,
  }

  componentDidMount(): void {
    const { polling } = this.props
    this.loadHealthKit()
    if (polling) this.timer = setInterval(this.loadHealthKit, polling)
  }

  componentWillUnmount(): void {
    clearTimeout(this.timer)
  }

  loadHealthKit = async () => {
    const { permissions, read, onReadSuccess, onReadFailure } = this.props
    if (!read) return
    try {
      await initialyze(permissions)
      const response = await Promise.all(Object.keys(read).map(async (index) => {
        const result = await read[index]()
        const key = `${index.slice(3, 4).toLowerCase()}${index.slice(4)}`
        return { [key]: result }
      }))
      const data = response.reduce((acc, result) => {
        const key = Object.keys(result)[0]
        return {
          ...acc,
          [key]: result[key],
        }
      }, {})
      this.setState({
        isLoading: false,
        isInitialyzed: true,
        data,
      })
      onReadSuccess && onReadSuccess(data)
      return
    } catch (error) {
      this.setState({ isLoading: false, error })
      onReadFailure && onReadFailure(error)
    }
  }


  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return (
      this.state.isLoading !== nextState.isLoading ||
      !_.isEqual(this.state, nextState)
    )
  }

  render(): ?React$Element<any> {
    const { children } = this.props
    if (!children) return null
    return children(this.state)
  }

}

export default HealthKit
