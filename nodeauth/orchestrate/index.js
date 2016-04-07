var express = require('express'),
session = require('express-session'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
logger = require('morgan'),

passport = require('passport'),
LocalStrategy = require('passport-local'),
TwitterStrategy = require('passport-twitter'),
GoogleStrategy = require('passport-google'),
FacebookStrategy = require('passport-facebook')

exphbs = require('express-handlebars'),

//======== my configuration and helper functions ========//

config = require('./config.js'), //config contains all tokens and other private info
funct = require('./functions.js'); //funct contains helper functions for passport and db

/************ EXPRESS INITIALIZING ********************/

var app = express();

app.use(logger('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'supernova',
	saveUninitialized: true, resave: true}));
app.use(methodOverride('X-HTTP-Method-Override'));
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

//configure to use handlebars template

var hbs = exphbs.create({
    layoutsDir: 'views/',
    defaultLayout: 'main', //we will be creating this layout shortly
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//============= PASSPORT STRATEGY MODULES ==========//
require('./passport.js')(passport);
//============ ROUTE FILE ==============//
require('./routes')(app, passport);

//============LISTEN ON PORT 3000 ==========//
const port = process.env.port || 3000;
app.listen(port);
console.log("app listening on port: " + port);