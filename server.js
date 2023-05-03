const express = require('express');
const morgan = require('morgan');
const app = express();

const path = require('path');
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

//Router
const router = require('./routes/index');
app.use('/', router);

app.listen(3000)