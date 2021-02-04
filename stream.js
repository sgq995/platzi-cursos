const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(
  path.resolve(__dirname, 'input.txt')
);

readableStream.setEncoding('utf-8');

readableStream.on('data', chunk => {
  console.log(chunk);
});

readableStream.on('end', () => {
  console.log('End');
});

// process.stdout.write('Hi!');

function UpperCase() {
  Transform.call(this);
}

util.inherits(UpperCase, Transform);

UpperCase.prototype._transform = function (chunk, codif, cb) {
  let convert = chunk.toString().toUpperCase();
  this.push(convert);
  cb();
}

let upper = new UpperCase();

readableStream
  .pipe(upper)
  .pipe(process.stdout);
