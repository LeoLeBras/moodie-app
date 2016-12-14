/* @flow */

import React from 'react'
import { Provider } from 'react-redux'
import { createRecket, Recket } from '@helpers/recket'
import createStore from '@store/create'
import Router from './Router'

const store = createStore()
const recket = createRecket(
  'http://192.168.0.188:3000',
  {
    jsonp: false,
    transports: ['websocket'],
    reconnection: true,
    reconnectionDelay: 500,
    reconnectionAttempts: 100,
  },
)

const Kernel = (): React$Element<any> => (
  <Provider store={store}>
    <Recket client={recket}>
      <Router />
    </Recket>
  </Provider>
)

export default Kernel
