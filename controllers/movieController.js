const Movie = require('../models/Movie');
module.exports = (req, res) => {
  Movie.getMovieInfo().then(response => {
    console.log(response);
    res.json(response);
  });
}