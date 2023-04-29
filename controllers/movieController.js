const Movie = require('../models/Movie');
module.exports = (req, res) => {
  Movie.getMovieInfo()
    .then(response => {
      res.status(200);
      res.json(response);
    })
    .catch(error => {
      res.send(new Error(error));
    })
}