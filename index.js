// requirements
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');

// global variables
var app = express();

// set and use statements
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));

// include controllers
app.use('/authors', require('./controllers/authors'));
app.use('/articles', require('./controllers/articles'));

// routes
app.get('/', function(req, res){
	res.render('home');
});

//listening
app.listen(3000, function(){
	console.log("You're listening to the smooth sounds of port 3000 in the morning.");
});