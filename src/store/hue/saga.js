/* @flow */

import { takeLatest } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { BRIDGE_SEARCH_REQUESTED, BRIDGE_SEARCH_SUCCEEDED } from './actionTypes'

const sleep = () => new Promise((resolve) => {
  setTimeout(resolve, 1000)
})

function* searchBridge() {
  yield sleep()
  yield put({ type: BRIDGE_SEARCH_SUCCEEDED })
}

export default function* auth(): any {
  yield [
    takeLatest(BRIDGE_SEARCH_REQUESTED, searchBridge),
  ]
}
