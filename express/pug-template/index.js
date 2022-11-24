const express = require('express');
const path = require('path');

const productsRouter = require('./routes/views/products');
const productsApiRouter = require('./routes/api/products');

const app = express();

// Middlewares
app.use(express.json());

// Static files
app.use('/static', express.static(path.join(__dirname, "public")))

// Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Frontend
app.use('/products', productsRouter);

// Backend
app.use('/api/products', productsApiRouter);

app.get('/', function (req, res, next) {
  res.send({ hello: 'world' });
});

const server = app.listen(8000, function() {
  console.log(server.address());
  console.log(`Listening http://localhost:${server.address().port}`)
});
