var express = require('express');

var app = express();

app.get('/', function(req, res) {
    console.dir(req.query);
    res.send("home page:  " + req.query.find);
});

app.get('/profile/:id', function(req, res) {
    console.dir(req.params);
    res.send("you requested to see a profile with the name of " + req.params.id);
});

app.listen(3000);
console.log('listening to port 3000');
