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
app.get('/a4', function(request, response) {
    response.render('a4.html');
});
app.get('/a5', function(request, response) {
    response.render('a5.html');
});
app.get('/a6', function(request, response) {
    response.render('a6.html');
});
app.get('/a7', function(request, response) {
    response.render('a7.html');
});
app.get('/a8', function(request, response) {
    response.render('a8.html');
});
app.get('/a9', function(request, response) {
    response.render('a9.html');
});

app.get('/project', function(request, response) {
    response.render('project.html');
});


var port = process.env.PORT || 5000;
app.set('port', port);
app.listen(port, function() {
    console.log("Server running in %d",port);
});