const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
require('dotenv').config();
const openBrowser = require('react-dev-utils/openBrowser');
const routes = require('./routes');

const app = express();

hbs.registerPartials(__dirname + '/partials');
app.set('view engine', 'hbs');

app.use((request, response, next) => {
  var now = new Date().toString();
  var log = `${now}: ${request.method} ${request.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (error) => {
    if (error) {
      console.log("Unable to append to server.log.");
    }
  });
  next()
})


app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is up on port ${process.env.PORT || 3000}`);
  console.log(process.env)
  if (process.env.NODE_ENV === 'dev') {
    openBrowser(`http://localhost:3000`);
  }
});
