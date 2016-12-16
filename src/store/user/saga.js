/* @flow */
/* eslint arrow-parens: 0 */
/* eslint no-constant-condition: 0 */

import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { BRIDGE_SEARCH_SUCCEEDED } from '@store/hue/actionTypes'
import { sayIAmAlive } from './index'

const sleep = (value: number) => new Promise((resolve) => {
  setTimeout(resolve, value)
})

function* beAlive() {
  while (true) {
    yield sleep(5000)
    yield put(sayIAmAlive())
  }
}

export default function* auth(): any {
  yield takeLatest(BRIDGE_SEARCH_SUCCEEDED, beAlive)
}
