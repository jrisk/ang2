var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/'));

app.listen(8081, function(req,res) {
console.log('listening on 8081');
});

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
})
