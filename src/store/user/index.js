/* @flow */

import { I_AM_ALIVE } from './actionTypes'
import type { User } from './types'

const initialState = {}

export default function (state: User = initialState): User {
  return state
}

export const sayIAmAlive = () => ({
  type: I_AM_ALIVE,
  payload: { yolo: true },
})
