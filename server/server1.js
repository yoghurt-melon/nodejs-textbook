const http = require('http');

http.createServer((request, response) => {
    response.write('<h1>hello Node!</h1>');
    response.end('<p>Hello Server!</p>');
}).listen(8080, () => {
    console.log('8000번 포트에서 서버 대기 중입니다!');
});