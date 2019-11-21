var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//create json parser
var jsonParser = bodyParser.json();

//create x-www-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//‘/’主路由，后面的路由可以跟正则表达式，如：'/ab?cd', 匹配'/abcd','acd'的路由
app.get('/', function(req, res) {
//req.query返回浏览器请求表单的 '？'后面的json文件，可以用.find找出？find=xxx，中xxx(字符串)
    console.dir(req.query);
    res.send("home page:  " + req.query.find);
});

//post请求的处理方式
app.post('/', urlencodedParser, function(req, res) {
    console.dir(req.body);
    res.send(req.body.name);
})

app.get('/profile/:id', function(req, res) {
//req.params返回表单中和：后面相匹配的json
    console.dir(req.params);
    res.send("you requested to see a profile with the name of " + req.params.id);
});

app.listen(3000);
console.log('listening to port 3000');
