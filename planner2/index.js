var express = require('express');
var https = require('https');
var pg = require('pg');
var path = require('path');
var fs = require('fs');
var assert = require('assert');

var app = express();

app.use(express.static(__dirname + '/'));

const HOST = '127.0.0.1';
const PORT = 1337;

var server = https.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var url = "request url is: " + req.url + "\n";
	var reqStuff = "request method is: " + req.method + "\n";
	var reqHeaders = "request headers are " + JSON.stringify(req.headers) + "\n";

	if (req.url == '/') {
		res.end('Welcome to the main server page');
	}
	else {
	res.end(url + reqStuff + reqHeaders);
	}
}).listen(PORT, HOST, () => {
	console.log(`Server listening on http://${HOST}:${PORT}`);
});

/************** google calendar API call *********************/

var google = require('googleapis');
var googleAuth = require('google-auth-library');

var apiKey = 'AIzaSyAEKheqfGPngThzUI9DoyUSxYneTlMWeII';

var options = {
	host: 'www.googleapis.com',
	path: '/calendar/v3/calendars/joeyrsk%40gmail.com/events?key=' + apiKey,
	method: 'GET'
}

console.info('options object made without port');
console.info('preparing GET call to calendar API');

var getter = https.get(options, function(res) {
	console.log('status code is: ' + res.statusCode);
	console.log('headers are: ' + res.headers);

	res.on('data', function(d) {
		console.log('data response call complete');
		});
	});

getter.end();
getter.on('error', function(err) {
	console.error(err);
});

var buf = new Buffer(2048);

//open google api server call on response callback)
	fs.open('indexgoogle.js', 'rs+', function (err, fd) {
		if (err) {
			console.error(err);
		}
		else {
			fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
				if (err) {
					console.error(err);
				}
				else {
				console.log(fd + "buffer: " + buf);
				}
			})
		}
	});

/************** initial google calendar test done ***************/


app.listen(3000);

app.get(['/', '/dashboard', '/detail*', '/plans', '/login'], (req,res) => {
	console.log('app works on port 3000');
	res.sendFile(path.join(__dirname + '/app/public/views/planner.html'));
});