/* @flow */
/* eslint arrow-parens: 0 */

import type { Action } from '@helpers/redux'
import type { Sample } from '@helpers/healthkit/types'
import type { Health } from './types'
import { DO_ACTIVITY, GET_STEP_COUNT, GET_SLEEP_SAMPLE, GET_DATA } from './actionTypes'

const initialState = {}

export default (state: Health = initialState, action: Action): Health => {
  console.log(action)
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export const getStepCount = (steps: Sample & { level: number }) => ({
  type: GET_STEP_COUNT,
  payload: { steps },
})

export const getData = (data: { hearthRateSamlpe: Array<Sample>, stepCount: Sample }) => ({
  type: GET_DATA,
  payload: { ...data },
})

export const getSleepSample = (sleep: Sample) => ({
  type: GET_SLEEP_SAMPLE,
  payload: { sleep },
})

export const doActivity = () => ({
  type: DO_ACTIVITY,
  payload: {},
})
