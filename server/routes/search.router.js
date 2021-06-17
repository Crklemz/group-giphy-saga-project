const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');


router.get('/', (req, res) => {
    // proxy api
    axios.get(`http://api.giphy.com/v1/gifs/search?q=&api_key=${process.env.GIPHY_API_KEY}&LIMIT=5`)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    }).catch( error => {
        console.log(error);
        res.sendStatus(500);
    })
})


module.exports = router;