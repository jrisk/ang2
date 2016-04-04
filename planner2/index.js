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
LocalStrategy = require('passport-local'),
TwitterStrategy = require('passport-twitter'),
GoogleStrategy = require('passport-google'),
FacebookStrategy = require('passport-facebook'),

exphbs = require('express-handlebars'),
logger = require('morgan');

//We will be creating these two files shortly
// var config = require('./config.js'), //config file contains all tokens and other private info
// funct = require('./functions.js'); //funct file contains our helper functions for our Passport and database work

/************ PASSPORT FUNCTIONS ******************/

//passport routing stuff

/************ EXPRESS ROUTING ********************/

var app = express();

//app.use(express.static(__dirname + '/'));

app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(session({secret: 'supernova',
	saveUninitialized: true, resave: true}));

app.use(passport.initialize());
app.use(passport.session());

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
app.listen(3000);

//configure to use handlebars template

app.set('views', path.join(__dirname + '/app/public/views'));

var hbs = exphbs.create({
    //defaultLayout: 'main', //we will be creating this layout shortly
    layoutsDir: '/app/public/views/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

/*************** ROUTES FOR ANGULAR ***************

app.get(['/', '/dashboard', '/detail*', '/plans', '/login', '/test'], (req,res) => {
	console.log('get request on port 3000');
	res.sendFile(path.join(__dirname + '/app/public/views/planner.html'));
});

app.get('/new', (req,res) => {
	console.log('refresh google calendar events...send them back to angular view')
	googleServer();
});

*********** END ANGULAR ROUTES ***************/

/*********** HANDLEBARS/PASSPORT ROUTES *************/

//displays our homepage
app.get('/', function(req, res){
  res.render('home', {user: req.user});
});

//displays our signup page
app.get('/signin', function(req, res){
  res.render('signin');
});

//sends the request through our local signup strategy, and if successful takes user to homepage, otherwise returns then to signin page
app.post('/local-reg', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signin'
  })
);

//sends the request through our local login/signin strategy, and if successful takes user to homepage, otherwise returns then to signin page
app.post('/login', passport.authenticate('local-signin', {
  successRedirect: '/',
  failureRedirect: '/signin'
  })
);

//logs user out of site, deleting them from the session, and returns to homepage
app.get('/logout', function(req, res){
  var name = req.user.username;
  console.log("LOGGIN OUT " + req.user.username)
  req.logout();
  res.redirect('/');
  req.session.notice = "You have successfully been logged out " + name + "!";
});

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