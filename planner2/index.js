var express = require('express');
var https = require('https');
var http = require('http');
var pg = require('pg');
var path = require('path');
var fs = require('fs');
var assert = require('assert');

var app = express();

app.use(express.static(__dirname + '/'));

app.listen(3000);

app.get(['/', '/dashboard', '/detail*', '/plans', '/login', '/test'], (req,res) => {
	console.log('get request on port 3000');
	res.sendFile(path.join(__dirname + '/app/public/views/planner.html'));
});

//stop calls to google for now and just work with mock service file events.json

/*
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
*/