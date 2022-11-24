const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = (event) => {
      if (xhr.readyState === 4) {
        (xhr.status === 200)
          ? resolve(JSON.parse(xhr.responseText))
          : reject(new Error(`Status ${xhr.status} for ${url}`));
      }
    };
    xhr.send();
  });
}

const doSomething = async () => {
  try {
    const data = await fetchData(API);
    console.log(data.info.count);

    const character = await fetchData(API + data.results[0].id);
    console.log(character.name);

    const origin = await fetchData(character.origin.url)
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
}

console.log('Before')
doSomething();
console.log('After')
