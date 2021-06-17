import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga() {

}

const sagaMiddleware = createSagaMiddleware(); 
sagaMiddleware.run(rootSaga);

const store = createStore(
    combineReducers({  }),
    applyMiddleware(sagaMiddleware, logger),
  );

  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
