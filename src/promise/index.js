const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey! Listen!');
    } else {
      reject('Whoooops!');
    }
  });
};

somethingWillHappen()
  .then(resp => console.log(resp))
  .catch(err => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Tuturu!')
      }, 2000);
    } else {
      const error = new Error('omae wa mou shindeiru');
      reject(error)
    }
  });
}

somethingWillHappen2()
  .then(resp => console.log(resp))
  .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(resp => console.log('Array of results', resp))
  .catch(err => console.error(err));
