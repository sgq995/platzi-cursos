const os = require('os');

console.log(`${os.platform()} ${os.arch()}`);
console.log(`cpus: ${os.cpus().length}`);

function kB(bytes) {
  return bytes / 1024;
}

function mB(bytes) {
  return kB(bytes) / 1024;
}

function gB(bytes) {
  return mB(bytes) / 1024;
}

console.log(`free mem: ${gB(os.freemem())} GB`)
console.log(`total mem: ${gB(os.totalmem())} GB`);

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());
