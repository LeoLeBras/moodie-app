/* @flow */
/* eslint no-console: 0 */
/* eslint arrow-parens: 0 */

import type { Options } from './types'
import watch from './watch'
import dispatch from './dispatch'

/**
 * Wrap socket.io
 */
export default (worker: Function): Function => {
  return (io, options: Options = {}): void => {
    // Return watch and dispatch helpers
    const start = (socket) => worker({
      watch: (callback) => {
        return watch(callback)(socket, options)
      },
      dispatch: (callback) => {
        return dispatch(callback)(socket, options)
      },
    })
    // Run for server
    if (options.server) {
      if (options.debug) console.log('[socket] ✋ ', 'new connection')
      return io.on('connection', (socket) => start(socket))
    }
    // Run for browser + mobile
    return start(io)
  }
}
