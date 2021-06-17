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
  yield takeEvery('GET_FAVORITES', fetchFavorites)
}

function* fetchFavorites() {
  try {
    const response = yield axios.get('/api/favorite')
    console.log(response.data);
    yield put ({type: 'ADD_FAVORITE', payload: response.data})
    
  } catch (error) {
    console.error('error in fetch Favorites', error)
  }
}

const favoritesList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return action.payload
    default:
      return state;
  }
};

const search = (state = {}, action) => {
    return state;
}

const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    combineReducers({ search, favoritesList }),
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
