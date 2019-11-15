var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

function startServer(route, handle) {
    var onRequest = function(request, response) {
        var pathname = url.parse(request.url).pathname;     //只保存端口和？前面的地址
        console.log('Request received ' + pathname);
        data = [];                                          //官方文档定义为数组
        request.on("error", function(err) {
            console.error(err);
        }).on("data", function(chunk) {
            data.push(chunk);                               //保存表头数据
        }).on("end", function() {
            if (request.method === "POST") {
                if (data.length > 1e3) {
                    request.connection.destroy();
                }
                data = Buffer.concat(data).toString();      //串联数组并输出为字符串         
                route(handle, pathname , response, querystring.parse(data));
            } else {
                var params = url.parse(request.url,true).query; //解析url,这里是get方法才能取到值？
                route(handle, pathname , response, params);
            }  
        })
    }

    var server = http.createServer(onRequest);
    server.listen(3000, '127.0.0.1');
    console.log('Server started on localhost port 3000');
}

exports.startServer = startServer;

