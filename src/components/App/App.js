import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from '../Search/Search';
import {Route, HashRouter as Router} from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Navbar from '../Navbar/Navbar';

function App(props) {





  // const dispatch = useDispatch();

  // const handleClick = () => {
  //   axios.get('/search')
  //   .then(response => {
  //     console.log(response.data);
  //     let data = response.data.data.images.downsized
  //     console.log(data);
      
  //     dispatch({
  //       type: 'SEARCH_GIF',
  //       payload: data,
  //     })
  //   }).catch(error => {
  //     console.error(error);
  //   })
  // }


  return (
    <Router>
    <div>
      <Navbar />
      <Route path="/" exact>
      <h1>Giphy Search!</h1>
        <Search />
      </Route>

      <Route path="/favorites" >
      <h1>Giphy Favorites!</h1>
        <Favorites />
      </Route>

    </div>
    </Router>
  );
}

export default App;
