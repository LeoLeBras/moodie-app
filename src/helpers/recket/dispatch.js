/* @flow */
/* eslint no-console: 0 */
/* eslint arrow-parens: 0 */

import type { Options, Action } from './types'
import { DISPATCH } from './actionTypes'

/**
 * Dispatch an event
 */
export default (...actions: Array<Action>): Function => {
  return (socket, options: Options = {}): void => {
    actions.forEach((action) => {
      if (options.debug) console.log('[socket] 👈 ', action)
      socket.emit(DISPATCH, action)
    })
  }
}
