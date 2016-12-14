/* @flow */

import { takeLatest } from 'redux-saga'
import { select, put } from 'redux-saga/effects'
import * as HealthKit from '@helpers/HealthKit'
import { COME_BACK_HOME } from '@helpers/home'
import { GET_DATA } from './actionTypes'
import { getStepCount } from './index'

function* comeBackHome() {
  const steps = yield HealthKit.getStepCount()
  yield put(getStepCount(steps))
}

// function* wakeUp() {
//   const sleepSamples = yield HealthKit.getLastSleep()
//   yield put(getStepCount(steps))
// }

// function* listenHearthRate() {
//   const state = yield select(getCart)
//   const { healthkit } = state
//   const { hearthRateSamlpe } = healthkit
//   get up 80
//   sport 120
//   stress 102
// }

export default function* health(): any {
  yield [
    takeLatest(COME_BACK_HOME, comeBackHome),
    // takeLatest(GET_DATA, listenHearthRate),
  ]
}
