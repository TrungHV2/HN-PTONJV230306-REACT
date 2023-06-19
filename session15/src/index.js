import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Tạo middleware
const sagaMiddleware = createSagaMiddleware();
// Thêm middleware cho store
const storeApp = createStore(reducers, applyMiddleware(sagaMiddleware));
// Thêm các saga cho middleware
sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={storeApp}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
