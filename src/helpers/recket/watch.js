/* @flow */
/* eslint no-console: 0 */
/* eslint arrow-parens: 0 */

import type { Options, Action } from './types'
import { DISPATCH } from './actionTypes'

/**
 * Watch socket events
 */
export default (callback: Function): Function => {
  return (socket, options: Options = {}): void => {
    socket.on(DISPATCH, (action: Action) => {
      if (options.debug) console.log('[socket] 👉 ', action)
      callback(action)
    })
  }
}
