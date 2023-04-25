const express = require('express');
const router = express.Router();


const controller = require('../controllers/movieController');
router.get('/movie', controller);

module.exports = router;