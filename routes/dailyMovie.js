const express = require('express');
const router = express.Router();

const controller = require('../controllers/dailyMovieController');
router.get('/', controller);
router.post('/', (req, res) => {
  console.log("asd");
  console.log(req.body.uno);
  res.status(200);
  res.send(req.body.uno);
})


module.exports = router;