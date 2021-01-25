const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function (event) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(null, JSON.parse(xhr.responseText));
      } else {
        const error = new Error(`Status ${xhr.status} for ${url}`);
        return callback(error, null);
      }
    }
  };
  xhr.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);

  fetchData(API + data1.results[0].id, function(error2, data2) {
    if (error2) return console.error(error2);

    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);

      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
