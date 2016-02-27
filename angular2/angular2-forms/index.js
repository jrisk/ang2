var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/'));

http.createServer( (req,res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	res.end('server working');
}).listen(8080, 'localhost', () => {
	console.log('server working on 8080');
});

app.listen(8081);

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
})