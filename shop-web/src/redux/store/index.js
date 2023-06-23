import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducers } from '../reducer'
import { rootSaga } from '../saga'

const sagaMiddleware = createSagaMiddleware();
export const storeApp = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)