const express = require('express');
const router = express.Router();

const controller = require('../controllers/dailyMovieController');
router.get('/dailymovie', controller);

module.exports = router;