const http = require('http');

const server = http.createServer(function (req, res) {
  console.log('New request!');
  console.log(req.url);

  switch(req.url) {
    case '/hola':
      res.write('Hi there!');
      res.end();
      break;

    default:
      res.writeHead(404);
      res.write('Error 404');
      res.end();
      break;
  }

  // res.writeHead(201, {
  //   'Content-Type': 'text/plain'
  // });

  // res.write('Hi!');

  // res.end();
});
server.listen(3000);

console.log('http://localhost:3000');
