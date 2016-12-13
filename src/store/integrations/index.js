/* @flow */
/* eslint arrow-parens: 0 */

import type { Action } from '@helpers/redux'
import { REHYDRATE } from 'redux-persist/constants'
import { TOOGLE_INTEGRATION } from './actionTypes'
import type { Integrations } from './types'

const initialState = {
  spotify: false,
  health: false,
}

export default (state: Integrations = initialState, action: Action): Integrations => {
  switch (action.type) {
    case REHYDRATE: {
      const persistedState = action.payload.integrations
      if (persistedState) {
        return {
          ...state,
          ...persistedState,
        }
      }
      return state
    }
    case TOOGLE_INTEGRATION: {
      const { integration } = action.payload
      return {
        ...state,
        [integration]: !state[integration],
      }
    }
    default: {
      return state
    }
  }
}

export const toogleIntegration = (integration: string) => ({
  type: TOOGLE_INTEGRATION,
  payload: { integration },
})
