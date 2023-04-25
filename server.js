const express = require('express');
const app = express();

const path = require('path');
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
const routerGetMovie = require('./routers/routerGetMovie');
app.use('/movie', routerGetMovie);

const routerDailyMovie = require('./routers/routerDailyMovie');
app.use('/dailymovie', routerDailyMovie);

//Homepage (Aún no se que habrá ahí)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000)