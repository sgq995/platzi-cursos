'use strict';

function errorHandler(error) {
  console.error(error);
  throw new Error('Server internal error');
}

module.exports = errorHandler;
