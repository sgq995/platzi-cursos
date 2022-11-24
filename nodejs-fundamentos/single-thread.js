console.log('Hello world')

let i = 0;

setInterval(() => {
  console.log(`${i++} I'm still alive`);

  if (i === 5) {
    console.error('Forcing error');
    var u = 1 + v;
  }
}, 1000);

console.log('Here!');
