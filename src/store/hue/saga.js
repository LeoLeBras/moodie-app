/* @flow */
/* eslint no-constant-condition: 0 */
/* eslint arrow-parens: 0 */

import { takeLatest } from 'redux-saga'
import { put, select } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/constants'
import { searchHueBridge, findHueBridge, rejectHueBridge } from './index'
import { BRIDGE_SEARCH_REQUESTED } from './actionTypes'

const SEARCH_POLLING = 1500
const SEARCH_DELAY = 1500

const sleep = (value: number) => new Promise((resolve) => {
  setTimeout(resolve, value)
})

function* requestBridge() {
  yield put(searchHueBridge())
}

function* searchBridge() {
  let i = 0
  let isSearching = true
  while (isSearching) {
    yield sleep(SEARCH_POLLING)
    const state = yield select(({ hue }) => ({ hue }))
    if (state.hue.isConnected) isSearching = false
    i += SEARCH_POLLING
    if (i > SEARCH_DELAY) {
      yield put(rejectHueBridge())
      isSearching = false
    }
  }
}

// function* fake() {
//   const state = yield select(({ hue }) => ({ hue }))
//   if (state.hue.isLoading) {
//     yield put(findHueBridge())
//   }
// }

export default function* auth(): any {
  yield takeLatest(REHYDRATE, requestBridge)
  yield takeLatest(BRIDGE_SEARCH_REQUESTED, searchBridge)
  // yield takeLatest(BRIDGE_SEARCH_REQUESTED, fake)
}
