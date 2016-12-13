/* @flow */

import { fork } from 'redux-saga/effects'
import { default as hue } from './hue/saga'

export default function* root(): any {
  yield [fork(hue)]
}
