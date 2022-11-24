const express = require('express');
const morgan = require('morgan');
const app = express();

const { config } = require('./config');

const moviesApi = require('./routes/movies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/error-handler');
const notFoundHandler = require('./utils/middleware/not-found-handler');

// Logger
app.use(morgan('tiny'));

// Body parser
app.use(express.json());

// Routes
moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening at http://localhost:${config.port}`);
});
