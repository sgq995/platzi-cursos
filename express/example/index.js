const express = require('express');
const app = express();
const expressJsx = require('./express-jsx');

app.engine('jsx', expressJsx);

app.set('views', './views');
app.set('view engine', 'jsx');

app.get('/', function (req, res, next) {
  // res.send('Hello world');
  res.render('index', {
    hello: 'Hola',
    world: 'mundo'
  })
});

const server = app.listen(8000, function () { 
  console.log(`Listening http://localhost:${server.address().port}`);
});
