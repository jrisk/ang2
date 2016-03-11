var express = require('express');
var https = require('https');
var http = require('http');
var pg = require('pg');
var path = require('path');
var fs = require('fs');
var assert = require('assert');

var child = require('child_process'), ls;

/*ls = child.exec('node indexgoogle', function(err, stdout, stderr) {
	if (err) {
		console.log(error.stack);
		console.log('Error Code: ' + error.code);
		console.log('Signal recieved: ' + error.signal);
	}
	console.log('Child process Standard Output: ' + stdout);
	console.log('Child process Standard Error: ' + stderr);
});

ls.on('exit', function(code) {
	console.log('Child process exited with function code: ' + code);
});*/

var app = express();

app.use(express.static(__dirname + '/'));

const HOST = '127.0.0.1';
const PORT = 8080;

//http server example

http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var url = "request url is: " + req.url + "\n";
	var reqStuff = "request method is: " + req.method + "\n";
	var reqHeaders = "request headers are " + JSON.stringify(req.headers) + "\n";

	if (req.url == '/') {
		res.end('Welcome to the main server page');
		process.stdout.write('hello process in req.url');
	}
	else {
	res.end(url + reqStuff + reqHeaders);
	}
}).listen(PORT, HOST, () => {
	console.log(`Server listening on http://${HOST}:${PORT}`);
});

//HTTPS example. SSL certificate NECESSARY

var sslOptions = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
}

https.createServer(sslOptions, (req,res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('https server at ' + req.url + 'head' + req.headers);
	process.stdout.write('https hello');
}).listen(1337);

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

/*var getter = https.get(options, function(res) {
	console.log('status code is: ' + res.statusCode);
	console.log('headers are: ' + res.headers);

	res.on('data', function(d) {
		console.log('data response call complete');
		});
	});

getter.end();
getter.on('error', function(err) {
	console.error(err);
});*/


app.listen(3000);

app.get(['/', '/dashboard', '/detail*', '/plans', '/login', '/test'], (req,res) => {
	console.log('app works on port 3000');
	res.sendFile(path.join(__dirname + '/app/public/views/planner.html'));
});