const express = require('express');
const app = express();

const path = require('path');
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
const router = require('./routes/index');
//Homepage (Aún no se que habrá ahí)
app.use(router);

app.listen(3000)