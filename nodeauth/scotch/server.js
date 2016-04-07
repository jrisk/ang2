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

var configDB = require('./config/database'); //make database file
// mongoose db config use
mongoose.connect(configDB.url);

require('./config/passport')(passport); // pass passport for configuration

/************ EXPRESS INITIALIZING ********************/

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

app.set('view engine', 'ejs');

app.use(session({ secret: 'hello', saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());
//for flash messages
app.use(flash());

//========= ROUTING FILE =========//
require('./routes')(app, passport);

/******** LISTEN ON PORT 3000 **********/
app.listen(port);

console.log("app started on port: " + port);

//configure to use ejs template