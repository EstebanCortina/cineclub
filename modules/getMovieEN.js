const { API_KEY } = require('../config/config.js');
const axios = require('axios');


function getMovieEN() {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = getMovieEN;
