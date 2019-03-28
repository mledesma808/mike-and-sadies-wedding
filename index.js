var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var fs = require('fs');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', function(rec, res) {
	res.render('main');
});

app.get('/directions', function(rec, res) {
	res.render('directions');
});

app.get('/lodging', function(rec, res) {
	res.render('lodging');
});

app.get('/timeline', function(rec, res) {
	res.render('timeline');
});

app.get('/potluck', function(rec, res) {
	res.render('potluck');
});

app.get('/gifts', function(rec, res) {
	res.render('gifts');
});

app.get('/photos', function(rec, res) {
	res.render('photos');
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
