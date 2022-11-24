function saludar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve();
    }, 1000);
  });
}

function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla Bla Bla...');
      resolve();
    }, 1000);
  });
}

function despedir() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adiós');
      resolve();
    }, 1000);
  });
}

let promise = saludar('Nombre');
for (let i = 0; i < 10; ++i) {
  promise = promise.then(hablar);
}
promise.then(despedir);
