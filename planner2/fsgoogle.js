var fs = require('fs');
var buf = new Buffer(500);

/****** filesystem: open file in parts, buffered only 500 bytes example *********/

fs.open('indexgoogle.js', 'rs+', function (err, fd) {
	if (err) {
		throw err;
		}
		console.log('file opened');

	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
		if (err) {
			throw err;
			}

		console.log('file being read ' + fd + "buffer: " + buf);

		fs.close(fd, function(err) {
			if (err) {
				throw err;
				}
			console.log('file closed successfully');
		});
	});
});

/***** fs: open whole file fully buffered, *******/

fs.readFile('indexgoogle.js', 'utf-8', function(err, fd) {
	if (err)
		throw err;
	console.log(fd);
});

fs.writeFile('fswrite.txt', 'writing to file in node fs module', function(err, data) {
	if (err)
		throw err;
	console.log('file write completed');
	console.log(data);
});