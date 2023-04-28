const express = require('express');
const router = express.Router();


const controller = require('../controllers/movieController');
router.get('/movie', (req, res) => {
  controller(req, res);
});

module.exports = router;