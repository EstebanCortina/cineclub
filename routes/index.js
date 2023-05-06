const express = require('express');

const path = require('path');
const parentDirPath = path.join(__dirname, '..');
const filePath = path.join(parentDirPath, '/views', 'index.html');

const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(filePath);
});

const routerMovie = require('./movie');
router.get('/movie', routerMovie);

const routerDailyMovie = require('./dailyMovie');
router.get('/dailymovie', routerDailyMovie);

const routerExample = require('./routerExample');
router.get('/example', routerExample);

const routerForum = require('./forum');
router.get('/forum', routerForum);

module.exports = router;