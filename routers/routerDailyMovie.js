const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, "./public");

app.use(express.static(staticPath));
const routerDailyMovie = express.Router();

routerDailyMovie.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/DailyMovie.html'))
});

module.exports = routerDailyMovie;