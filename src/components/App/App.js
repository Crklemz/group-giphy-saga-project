import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from '../Search/Search'

function App(props) {

  const search = useSelector(store => store.search);



  const dispatch = useDispatch();

  const handleClick = () => {
    axios.get('/search')
    .then(response => {
      console.log(response.data);
      let data = response.data.data.url
      dispatch({
        type: 'SEARCH_GIF',
        payload: data,
      })
    }).catch(error => {
      console.error(error);
    })
  }


  return (

    <div>
      <h1>Giphy Search!</h1>

      <button onClick={handleClick}>Refresh Gif</button>
    
      <iframe src={search} />
      <Search />

    </div>

  );
}

export default App;
