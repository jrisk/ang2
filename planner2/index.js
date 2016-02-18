var express = require('express');
var http = require('http');
var pg = require('pg');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/'));

const HOST = '127.0.0.1';
const PORT = 1337;

http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('why');
}).listen(PORT, HOST, () => {
	console.log(`Server listening on http://${HOST}:${PORT}`);
});

app.listen(3000);

app.get('/', (req,res) => {
	console.log('app works on port 3000');
	res.sendFile(path.join(__dirname + '/public/planner.html'));
});






