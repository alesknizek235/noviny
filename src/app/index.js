const path = require('path');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'www')));

app.use('/', require(path.join(__dirname, 'routers', 'indexRouter')));

module.exports = app;