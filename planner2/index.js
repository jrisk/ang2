var express = require('express'),
session = require('express-session'),
https = require('https'),
http = require('http'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
pg = require('pg'),
path = require('path'),
fs = require('fs'),
assert = require('assert'),

passport = require('passport'),

mongoose = require('mongoose'),
flash = require('connect-flash'),
exphbs = require('express-handlebars'),
logger = require('morgan');

var //config = require('./config.js'), //config file contains all tokens and other private info
configDB = require('./database.js'); //,make database file
//funct = require('./functions.js'); //funct file contains our helper functions for our Passport and database work

const port = 3000;

// mongoose db config use

mongoose.connect(configDB.url);

require('./passport')(passport); // pass passport for configuration

/************ EXPRESS INITIALIZING ********************/

var app = express();

app.use(logger('combined'));
app.use(cookieParser());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

/*app.use(session({secret: 'supernova',
	saveUninitialized: true, resave: true})); */

app.use(session({ secret: 'hello', saveUninitialized: true, resave: true }));

app.use(passport.initialize());
app.use(passport.session());

//for flash messages
app.use(flash());

// SESSION-PERSISTED MESSAGE MIDDLEWARE
app.use(function(req,res,next) { 
	var err = req.session.error,
		msg = req.session.notice,
		success = req.session.success;

	delete req.session.error;
	delete req.session.success;
	delete req.session.notice;

	if (err) res.locals.error = err;
	if (msg) res.locals.notice = msg;
	if (success) res.locals.success = success;

	next();
});

/******** LISTEN ON PORT 3000 **********/
app.listen(port);

console.log("app started on port: " + port);

//configure to use handlebars template

app.set('views', path.join(__dirname + '/app/public/views'));

var hbs = exphbs.create({
    layoutsDir: 'app/public/views/',
    defaultLayout: 'main', //we will be creating this layout shortly
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//============= PASSPORT STRATEGY MODULES ==========/
//require('./passport1.js')(passport);
//============ ROUTE FILE ==============//
require('./routes')(app, passport);


/*************** ROUTES FOR ANGULAR ***************

app.get(['/', '/dashboard', '/detail*', '/plans', '/login', '/test'], (req,res) => {
	console.log('get request on port 3000');
	res.sendFile(path.join(__dirname + '/app/public/views/planner.html'));
});

app.get('/new', (req,res) => {
	console.log('refresh google calendar events...send them back to angular view')
	googleServer();
});

**************** ANGULAR ROUTES END *****************/


//stop calls to google for now and just work with mock service file events.json

/*
function googleServer() {

var child = require('child_process'), googleCall;

googleCall = child.exec('node indexgoogle', function(err, stdout, stderr) {
	if (err) {
		console.log(err.stack);
		console.log('Error Code: ' + err.code);
		console.log('Signal recieved: ' + err.signal);
	}
	console.log('Child process Standard Error: ' + stderr);
	console.log('Child process Standard Output: ' + stdout);
});

googleCall.on('exit', function(code) {
	console.log('Child process exited with function code: ' + code);
	});
}

*/