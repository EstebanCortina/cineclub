const { API_KEY } = require('../config/config.js');
const axios = require('axios');

function getMoviePosters() {
  let res = [];
  return new Promise((resolve, reject) => {
    axios.get(`https://api.themoviedb.org/3/movie/76341/images?api_key=${API_KEY}`)
      .then(response => {
        for (let i = 0; i < response.data.posters.length; i++) {
          if (response.data.posters[i].iso_639_1 == 'es') {
            res.push(response.data.posters[i]);
          }
        }
        resolve(res);
      })
      .catch(error => {
        reject(error);
      })
  });
}

module.exports = getMoviePosters;