const express = require('express');
const { getTranslatedData, getMovieData } = require('../modules/getMovie.js');



const routerGetMovie = express.Router();

routerGetMovie.get('/', async (req, res) => {
  let response = []
  try {
    await getMovieData();
    response = await getTranslatedData();
    res.status(200);
    res.json(response);
  } catch (error) {
    res.status(404);
    console.error(error);
  }
});

module.exports = routerGetMovie;