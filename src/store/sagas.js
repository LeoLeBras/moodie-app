/* @flow */

import { fork } from 'redux-saga/effects'
import { default as hue } from './hue/saga'
import { default as user } from './user/saga'

export default function* root(): any {
  yield [fork(hue), fork(user)]
}
