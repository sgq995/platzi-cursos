const fs = require('fs');
const path = require('path');

function read(path, cb) {
  fs.readFile(path, (err, data) => {
    console.log(data.toString());
  });
}

read(path.resolve(__dirname, 'file.txt'))
