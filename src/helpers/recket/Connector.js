/* @flow */

import { Component } from 'react'
import { connect } from 'react-redux'
import type { Action } from '@helpers/redux'
import watch from './watch'
import dispatch from './dispatch'

type Props = {
  children?: React$Element<any>,
  client: any,
  log: Action,
  dispatch: (action: Action) => void,
}

class Connector extends Component<void, Props, void> {

  props: Props

  componentDidMount(): void {
    watch((action) => {
      if (action.type) this.props.dispatch(action)
    })(this.props.client)
  }

  componentWillReceiveProps(nextProps: Props): void {
    const { client, log } = nextProps
    dispatch(log)(client)
  }

  shouldComponentUpdate(): boolean {
    return false
  }

  render() {
    const { children } = this.props
    return children && children
  }

}

export default connect(({ log }) => ({ log }))(Connector)
