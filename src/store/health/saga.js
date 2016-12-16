/* @flow */
/* eslint arrow-parens: 0 */
/* eslint no-constant-condition: 0 */

import { takeLatest } from 'redux-saga'
import { take, put, select } from 'redux-saga/effects'
import * as HealthKit from '@helpers/healthkit'
import { COME_BACK_HOME } from '@helpers/home'
import { BRIDGE_SEARCH_SUCCEEDED } from '@store/hue/actionTypes'
import { GET_DATA, WAIT_AWAKENING } from './actionTypes'
import { doActivity, getSleepSample, getStepCount } from './index'

// const sleep = (value: number) => new Promise((resolve) => {
//   setTimeout(resolve, value)
// })

function* comeBackHome() {
  try {
    const steps = yield HealthKit.getStepCount()
    yield put(getStepCount({
      ...steps,
      level: 5,
    }))
  } catch (errors) {
    yield put(getStepCount({
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      value: 2000,
      level: 5,
    }))
  }
}

function* waitAwakening() {
  const { integrations } = yield select((state) => state)
  if (integrations.health) {
    const sleepAnalysis = yield HealthKit.getSleepSamples()
    yield put(getSleepSample(sleepAnalysis[0]))
  }
}

// function* fake() {
//   yield sleep(1000)
//   yield put({ type: WAIT_AWAKENING })
//   yield sleep(4000)
//   yield put({ type: COME_BACK_HOME })
// }

function* listenHeartRate() {
  while (true) {
    const { payload } = yield take(GET_DATA)
    const { value } = payload.heartRateSamples[0]
    if (value > 100) yield put(doActivity())
  }
}

export default function* health(): any {
  yield [
    // takeLatest(BRIDGE_SEARCH_SUCCEEDED, fake),
    takeLatest(COME_BACK_HOME, comeBackHome),
    takeLatest(WAIT_AWAKENING, waitAwakening),
    takeLatest(BRIDGE_SEARCH_SUCCEEDED, listenHeartRate),
  ]
}
