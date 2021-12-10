const http = require('http');

//创建一个server对象
const server = http.createServer((request, response) => {
  response.end('Hello, world!');
});

server.listen('8080', 'localhost');