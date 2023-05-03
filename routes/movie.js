const express = require('express');
const router = express.Router();


const movieController = require('../controllers/movieController');
router.get('/movie', (req, res) => {
  movieController.getMovie(req, res);
});

module.exports = router;