const { exec, spawn } = require('child_process');
const { promisify } = require('util');

exec('ls -la', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }

  console.log(stdout);
});

(async function () {
  const execPromise = promisify(exec);
  try {
    const { stdout, stderr } = await execPromise('ls -la');
    console.log(stdout);
  } catch (err) {
    console.error(err);
  }
})();

let process = spawn('ls', ['-la']);
// console.log(process);

process.stdout.on('data', function (data) {
  console.log(data.toString());
});

process.on('exit', function () {
  console.log('The process has been completed');
});
