/* @flow */

import type { Action } from '@helpers/redux'

const initialState = {
  type: '@@redux/INIT',
  payload: {},
}

export default (state: Action = initialState, action: Action): Action => {
  return action
}
