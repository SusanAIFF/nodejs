第九节：web服务器 介绍，创建一个简单的服务器
var http = require('http');

var onRequest = function(request, response) {
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello from out application');
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000');



第十节：相应json
var http = require('http');

var onRequest = function(request, response) {
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'application/json'});
    var myJson = {
        name: "hfadk",
        job: "coder",
        age: 21
    };
    response.end(JSON.stringify(myObj));    //将json格式数据序列化，便于传输
                                            //反序列化：JSON.parse(JSON.stringify(myJson));
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000');



第十一节：web响应HTML
var http = require('http');
var fs = require('fs');

var onRequest = function(request, response) {
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/html'});     //'text/html'
    //用流来读取html文件
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(response);
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
console.log('Server started on localhost port 3000');



第十二节：模块化思想
#server.js
var http = require('http');
var fs = require('fs');

function startServer() {
    var onRequest = function(request, response) {
        console.log('Request received');
        response.writeHead(200, {'Content-Type': 'application/json'});
        var myJson = {
            name: "hfadk",
            job: "coder",
            age: 21
        };
        response.end(JSON.stringify(myJson));  
    }
    var server = http.createServer(onRequest);
    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

exports.startServer = startServer;

#app.js
var server = require('./server');
server.startServer();



第十二节：路由，请求不同的资源
var http = require('http');
var fs = require('fs');

function startServer() {
    var onRequest = function(request, response) {
        console.log('Request received!' + request.url);
        if (request.url === '/' || request.url === '/home') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);          //__
        }
        
    }
}
