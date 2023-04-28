const Movie = require('../models/Movie');
module.exports = (req, res) => {
  Movie.getMovieInfo().then(response => {
    res.json(response);
  });
}