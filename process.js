// const process = require('process');

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('El proceso acabo');
});

process.on('uncaughtException', (err, origin) => {
  console.error(`Error form ${origin}`);
  console.error(err);
});

thisDoesntExsists();

console.log(`This doesn't show`)
