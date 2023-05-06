const express = require('express');
const app = express();
const path = require('path');
const parentDirPath = path.join(__dirname, '..');
const filePath = path.join(parentDirPath, '/views', 'index.html');

const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(filePath);
});

const routerMovie = require('./movie');
router.use('/movie', routerMovie);

const routerDailyMovie = require('./dailyMovie');
router.use('/dailymovie', routerDailyMovie);

const routerExample = require('./routerExample');
router.use('/example', routerExample);

const routerForum = require('./forum');
router.use('/forum', routerForum);

module.exports = router;