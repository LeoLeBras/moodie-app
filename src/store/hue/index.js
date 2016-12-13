/* @flow */
/* eslint arrow-parens: 0 */

import { REHYDRATE } from 'redux-persist/constants'
import type { Action } from '@helpers/redux'
import * as actionTypes from './actionTypes'
import type { Hue } from './types'

const {
  BRIDGE_SEARCH_REQUESTED, BRIDGE_SEARCH_SUCCEEDED,
  CHANGE_COLOR, CHANGE_BRIGHTNESS,
  TURN_ON, TURN_OFF,
} = actionTypes

const initialState = {
  isLoading: false,
  isOn: false,
  isConnected: false,
}

export default (state: Hue = initialState, action: Action): Hue => {
  switch (action.type) {
    case REHYDRATE: {
      const persistedState = action.payload.hue
      if (persistedState) {
        return {
          ...state,
          ...persistedState,
        }
      }
      return {
        ...state,
        isLoading: false,
      }
    }
    case TURN_ON: {
      return {
        ...state,
        isOn: true,
      }
    }
    case TURN_OFF: {
      return {
        ...state,
        isOn: false,
      }
    }
    case BRIDGE_SEARCH_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case BRIDGE_SEARCH_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        isConnected: true,
      }
    }
    default: {
      return state
    }
  }
}

export const searchHueBridge = () => ({
  type: BRIDGE_SEARCH_REQUESTED,
  payload: {},
})

export const changeColor = (color: { r: number, g: number, b: number }) => ({
  type: CHANGE_COLOR,
  payload: { ...color },
})

export const changeBrightness = (brightness: number) => ({
  type: CHANGE_BRIGHTNESS,
  payload: { brightness },
})

export const turnOn = () => ({
  type: TURN_ON,
  payload: {},
})

export const turnOff = () => ({
  type: TURN_OFF,
  payload: {},
})
