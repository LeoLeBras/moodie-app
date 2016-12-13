/* @flow */
/* eslint no-duplicate-imports: 0 */
/* eslint react/no-did-mount-set-state: 0 */

import { Component } from 'react'
import _ from 'lodash'
import initialyze from './initialyze'
import type { Permissions } from './initialyze'

type Data = {
  [key: string]: Object,
}

type Props = {
  children?: () => React$Element<any>,
  permissions: Permissions,
  read: { [key: string]: () => Promise<any> },
  onReadSuccess?: (data: Data) => void,
  onReadFailure?: (error: Object) => void,
  polling?: number,
}

type State = {
  data: Data,
  error: any,
  loading: boolean,
}

class HealthKit extends Component<void, Props, State> {

  props: Props
  state: State = { error: false, data: {}, loading: true }

  componentDidMount(): void {
    const { polling } = this.props
    this.loadHealthKit()
    if (polling) setInterval(this.loadHealthKit, polling)
  }

  loadHealthKit = async () => {
    const { permissions, read, onReadSuccess, onReadFailure } = this.props
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
      this.setState({ loading: false, data })
      onReadSuccess && onReadSuccess(data)
      return
    } catch (error) {
      this.setState({ loading: false, error })
      onReadFailure && onReadFailure(error)
    }
  }


  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return (
      this.state.loading !== nextState.loading ||
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
