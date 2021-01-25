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

fetchData(API)
  .then(data => {
    console.log(data.info.count);
    return fetchData(API + data.results[0].id);
  })
  .then(data => {
    console.log(data.name);
    return fetchData(data.origin.url)
  })
  .then(data => {
    console.log(data.dimension);
  })
  .catch(error => console.error(error));
