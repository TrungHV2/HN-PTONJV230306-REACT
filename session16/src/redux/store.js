import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga';


const sagaMiddleware = createSagaMiddleware();
export const storeApp = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);