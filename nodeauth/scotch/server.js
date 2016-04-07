var express = require('express'),
session = require('express-session'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),

passport = require('passport'),

mongoose = require('mongoose'),
flash = require('connect-flash'),
logger = require('morgan'),
ejs = require('ejs');

const port = 3001;

var configDB = require('./database.js'); //make database file
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

/******** LISTEN ON PORT 3000 **********/
app.listen(port);

console.log("app started on port: " + port);

//configure to use ejs template

//========= ROUTING FILE =========//
require('./routes')(app, passport);