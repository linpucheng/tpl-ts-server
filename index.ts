const http = require('http');

//创建一个server对象
const server = http.createServer((request, response) => {
  response.end('Hello, world!');
});

//监听端口
const hostname = 'localhost';
const port = 8080;
server.listen(port, hostname);
console.log(`Server is alive at: http://${hostname}:${port}`);