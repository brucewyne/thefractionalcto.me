const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const routes = require('./routes');

const app = express();

hbs.registerPartials(`${__dirname}/partials`);

app.set('view engine', 'hbs');

app.use(express.static(`${__dirname}/../public`));
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;
