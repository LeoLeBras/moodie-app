/* @flow */
/* eslint arrow-parens: 0 */

import { REHYDRATE } from 'redux-persist/constants'
import type { Action } from '@helpers/redux'
import * as actionTypes from './actionTypes'
import type { Hue } from './types'

const {
  BRIDGE_SEARCH_REQUESTED, BRIDGE_SEARCH_SUCCEEDED, BRIDGE_SEARCH_FAILED,
  CHANGE_SATURATION, CHANGE_BRIGHTNESS,
  TURN_ON, TURN_OFF,
} = actionTypes

const initialState = {
  isLoading: true,
  isOn: false,
  isConnected: false,
  brightness: 100,
  saturation: 75,
}

export default (state: Hue = initialState, action: Action): Hue => {
  switch (action.type) {
    case REHYDRATE: {
      const persistedState = action.payload.hue
      if (persistedState) {
        return {
          ...state,
          ...persistedState,
          isConnected: false,
          isLoading: true,
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
    case BRIDGE_SEARCH_FAILED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case CHANGE_SATURATION: {
      const { saturation } = action.payload
      return { ...state, saturation }
    }
    case CHANGE_BRIGHTNESS: {
      const { brightness } = action.payload
      return { ...state, brightness }
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

export const findHueBridge = () => ({
  type: '@@hue/BRIDGE_SEARCH_SUCCEEDED',
  payload: {},
})

export const rejectHueBridge = () => ({
  type: '@@hue/BRIDGE_SEARCH_FAILED',
  payload: {},
})

export const changeSaturation = (saturation: number) => ({
  type: CHANGE_SATURATION,
  payload: { saturation },
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
