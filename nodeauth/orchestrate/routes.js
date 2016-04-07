//routes1.js
/*********** HANDLEBARS/PASSPORT ROUTES *************/

module.exports = function(app,passport) {
	
	app.get('/', function(req,res) {
		res.render('home', {user: req.user});
	});

		//displays our signup page
	app.get('/signin', function(req, res){
	  res.render('signin');
	});

	//sends the request through our local signup strategy, and if successful takes user to homepage, otherwise returns then to signin page
	app.post('/local-reg', passport.authenticate('local-signup', {
	  successRedirect: '/',
	  failureRedirect: '/signin'
	  })
	);

	//sends the request through our local login/signin strategy, and if successful takes user to homepage, otherwise returns then to signin page
	app.post('/login', passport.authenticate('local-signin', {
	  successRedirect: '/',
	  failureRedirect: '/signin'
	  })
	);

	//logs user out of site, deleting them from the session, and returns to homepage
	app.get('/logout', function(req, res){
	  var name = req.user.username;
	  console.log("LOGGIN OUT " + req.user.username)
	  req.logout();
	  res.redirect('/');
	  req.session.notice = "You have successfully been logged out " + name + "!";
	});
}