const express = require('express');
const app = express();

const path = require('path');
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
const routerMovie = require('./routes/movie');
app.use('/', routerMovie);

const routerDailyMovie = require('./routes/dailyMovie');
app.use('/', routerDailyMovie);

const routerExample = require('./routes/routerExample');
app.use('/', routerExample);

//Homepage (Aún no se que habrá ahí)
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000)