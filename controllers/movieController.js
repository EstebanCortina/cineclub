const Movie = require('../models/Movie');
function getMovie(req, res) {
  Movie.getMovieInfo()
    .then(response => {
      res.status(200);
      res.json(response);
    })
    .catch(error => {
      res.send(new Error(error));
    })
}

module.exports = {
  getMovie: (req, res) => {
    Movie.getMovieInfo()
      .then(response => {
        res.status(200);
        res.json(response);
      })
      .catch(error => {
        res.send(new Error(error));
      })
  }
}