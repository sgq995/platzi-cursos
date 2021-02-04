console.log('Logging')
console.error('Something goes wrong')
console.warn('Please change this...')

const data = [{
  a: 1,
  b: 'Z'
}, {
  a: 2,
  b: 'Another'
}]
console.table(data);

console.group('Conversacion');
console.log('Hi!');
console.group('bla');
console.log('BlaBla');
console.log('Bla');
console.log('BlaBlaBla');
console.log('BlaBlaBlaBla');
console.groupEnd('bla');
console.log('Bye!');
console.groupEnd('Conversacion');

console.count('Contador');
console.count('Contador');
console.count('Contador');
console.count('Contador');
console.countReset('Contador');
console.count('Contador');
console.count('Contador');
