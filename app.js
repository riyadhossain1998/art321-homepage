var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();
app.set('view engine', 'html');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
    response.render('index.html');
});
app.get('/soon', function(request, response) {
    response.render('soon.html');
});
app.get('/a2', function(request, response) {
    response.render('a2.html');
});
app.get('/a3', function(request, response) {
    response.render('a3.html');
});

var port = process.env.PORT || 5000;
app.set('port', port);
app.listen(port, function() {
    console.log("Server running in %d",port);
});