var express = require('express');
var app = express();
var jade = require('jade');
app.set('view engine', 'jade');
app.locals.port = 80;

app.use('/pub', express.static(__dirname + "/pub"));

app.get('/', function(req,res){
	res.render('index', { title: 'Hey', message: 'Hello there!'});
});

//listen for requests at ipaddress:port specified at :19
app.listen(app.locals.port, function(){ 
	console.log("Server is running on port " + app.locals.port);

	if(process.env.USERNAME == 'root'){
		// code snippet to change user after port is listened to for security, 
		// found at http://syskall.com/dont-run-node-dot-js-as-root/

		// Find out which user used sudo through the environment variable
		var uid = parseInt(process.env.SUDO_UID);
		// Set our server's uid to that user
		if (uid) process.setuid(uid);
		console.log('Server\'s UID is now ' + process.getuid());
	} // end if root

});
