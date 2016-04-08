//routes.js
/*********** EJS/PASSPORT ROUTES *************/

module.exports = function(app,passport) {

	// ============ HOME PAGE with login links ========
	
	app.get('/', function(req,res) {
		res.render('index.ejs');
	});

	//========= LOGIN ==========
	// show the login form

	app.get('/login', function(req,res) {

		//render page and pass flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	//============= SIGNUP ===========/
	//show the signup form

	app.get('/signup', function(req,res) {
		//render page and any flash data
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	// process the signup form
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	// ============== PROFILE SECTION ============
	//we want this protect so you have to be logged in to visit it
	//use route middleware to verify that (isLoggedIn function)

	app.get('/profile', isLoggedIn, function(req,res) {
		res.render('profile.ejs', {
			user: req.user // get user from session and pass to template
		});
	});

	// ===========================================================
	//==================== FACEBOOK ROUTES =======================
	// ===========================================================

	//route for facebook authentication and login
	app.get('/auth/facebook', passport.authenticate('facebook', { scope : [ 'email' ] }));

	//handle the callback after facebook has authenticated the user
	app.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect: '/profile',
			failureRedirect: '/'
		}));
	//=========== LOGOUT SECTION

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

	//=========== route middleware isLoggedIn to make sure user is logged in

	function isLoggedIn(req, res, next) {

		if (req.isAuthenticated())
			return next();

		//if not authenticated and logged in, redirect to home page
		res.redirect('/');
	}