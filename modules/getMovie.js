const { API_KEY } = require('../config/config.js');
const axios = require('axios');


function getMovieData() {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`https://api.themoviedb.org/3/movie/76341?api_key=${API_KEY}`)
        .then(response => {
          const {
            original_title,
            poster_path,
            release_date,
            revenue,
            runtime,

          } = response.data;
          const movieData = {
            original_title,
            poster_path,
            release_date,
            revenue,
            runtime
          }
          resolve(movieData);
        });
    } catch (error) {
      reject(error);
    }
  });
}

function getTranslatedData() {
  let res = [];
  return new Promise((resolve, reject) => {
    axios.get(`https://api.themoviedb.org/3/movie/76341/translations?api_key=${API_KEY}`)
      .then(response => {
        for (let i = 0; i < response.data.translations.length; i++) {

          if ((response.data.translations[i].iso_3166_1 === "ES") && (response.data.translations[i].iso_639_1 === "es")) {
            const {
              iso_3166_1
            } = response.data.translations[i];
            const newObj = response.data.translations[i].data;
            newObj.region = iso_3166_1;
            res.push(newObj);
          }
          if (response.data.translations[i].iso_3166_1 === "MX") {
            const {
              iso_3166_1
            } = response.data.translations[i];
            const newObj = response.data.translations[i].data;
            newObj.region = iso_3166_1;
            res.push(newObj);
          }
        }
        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
  })
}
module.exports = {
  getTranslatedData: getTranslatedData,
  getMovieData: getMovieData
};
