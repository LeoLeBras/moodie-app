/* @flow */

import React from 'react'
import { Provider } from 'react-redux'
import { createRecket, Recket } from '@helpers/recket'
import createStore from '@store/create'
import Router from './Router'

const store = createStore()
const recket = createRecket(
  'http://localhost:3000',
  { jsonp: false, transports: ['websocket'] },
)

const Kernel = (): React$Element<any> => (
  <Provider store={store}>
    <Recket client={recket}>
      <Router />
    </Recket>
  </Provider>
)

export default Kernel
