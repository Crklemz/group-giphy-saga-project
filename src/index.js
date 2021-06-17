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

const search = (state ={}, action) => {
    return action.payload;
}

const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    combineReducers({ search }),
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
