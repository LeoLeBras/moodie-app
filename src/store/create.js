/* @flow */

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { persistStore } from 'redux-persist'
import reduxThunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { promiseMiddleware } from '@helpers/redux'
import * as reducers from './reducers'
import sagas from './sagas'

// Initialyze middlewares
const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(
  applyMiddleware(
    reduxThunkMiddleware,
    promiseMiddleware,
    sagaMiddleware,
  ),
)

// Build store
export default function configureStore() {
  const store = createStore(
    combineReducers({ ...reducers }),
    enhancer,
  )
  persistStore(store, {
    storage: AsyncStorage,
  })
  sagaMiddleware.run(sagas)
  return store
}
