/* @flow */
/* eslint arrow-parens: 0 */
/* eslint no-constant-condition: 0 */

import { REHYDRATE } from 'redux-persist/constants'
import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { sayIAmAlive } from './index'

const sleep = (value: number) => new Promise((resolve) => {
  setTimeout(resolve, value)
})

function* beAlive() {
  while (true) {
    yield sleep(30000)
    yield put(sayIAmAlive())
  }
}

export default function* auth(): any {
  yield takeLatest(REHYDRATE, beAlive)
}
