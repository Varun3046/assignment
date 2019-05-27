
var express = require('express');

var http = require('http');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();




//APIs Routes
app.use('/apis', require('./controllers/assignment.controller'));





process.env['TZ'] = 'Asia/Kolkata';

process.env['NODE_ENV'] = 'development';
//process.env['NODE_ENV'] = 'production';
var server_start_date = new Date();

var server = http.createServer(app).listen(4000, function() {
    console.log('Server listening at ' + "localhost" + ':' + server.address().port + ' On Dated - ' + server_start_date);
});

