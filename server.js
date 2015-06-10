var serve = require('serve-static')('.');
var fs = require('fs');

var PORT = 80;

require('http').createServer(function (req, res) {

	serve(req, res, function (err) {

		res.statusCode = err ? (err.statusCode || err.status) : 404;
		res.end(err ? err.toString() : 'Cannot ' + req.method + ' ' + req.url + '\n');

	});

}).listen(PORT);

if(process.env.USERNAME == 'root'){
	// code snippet to change user after port is listened to for security, 
	// found at http://syskall.com/dont-run-node-dot-js-as-root/

	// Find out which user used sudo through the environment variable
	var uid = parseInt(process.env.SUDO_UID);
	// Set our server's uid to that user
	if (uid) process.setuid(uid);
	console.log('Server\'s UID is now ' + process.getuid());
} // end if root
