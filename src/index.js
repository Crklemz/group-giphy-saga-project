import App from './components/App/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

//root saga
function* rootSaga() {
  yield takeEvery('GET_FAVORITES', fetchFavorites)
    yield takeEvery('LOOKUP_GIF', searchGif)
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

function* searchGif (action) {
    console.log('in searchGif, action.payload-->', action.payload)
    try{
        const response = yield axios.get(`/search?q=${action.payload}`)
        console.log('searchGif response.data --> ', response.data);
        yield put({type: 'SEARCH_GIF', payload: response.data})
    }catch (error) {
        console.log('error in searchGif', error);
    }
}

//reducer for searching
const search = (state = [], action) => {
    if(action.type === 'SEARCH_GIF') {
        return action.payload.data;
    }
    return state;

}

const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(
    combineReducers({ search, favoritesList }),
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
