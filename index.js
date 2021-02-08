const express = require('express');
const app = express();

const { config } = require('./config');

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/json', function (req, res) {
  res.json({ hello: 'world' });
})

app.get('/is_leap', function (req, res) {
  res.send('Put the year after the /');
});

app.get('/is_leap/:year', function (req, res) {
  const { year } = req.params;

  let isLeap = false;
  const yearAsNum = parseInt(year);
  if ((yearAsNum % 4) !== 0) {
    isLeap = false
  } else if ((yearAsNum % 100) !== 0) {
    isLeap = true;
  } else if ((yearAsNum % 400) !== 0) {
    isLeap = false;
  } else {
    isLeap = true;
  }

  res
    .send(`Year ${year} is ${isLeap ? 'leap' : 'common'}`);
})

app.listen(config.port, function () {
  console.log(`Listening at http://localhost:${config.port}`);
});
