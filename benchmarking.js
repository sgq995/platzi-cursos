let sum = 0;

console.time('cycle');
for (let i = 0; i < 1_000_000_000; ++i) {
  sum += 1;
}
console.timeEnd('cycle');

console.time('async');
test()
  .then(() => {
    console.timeEnd('async');
  })

function test() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}
