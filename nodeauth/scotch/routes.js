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
	//==================== GOOGLE ROUTES ========================
	// ===========================================================

	app.get('/auth/google', passport.authenticate('google', { 
		scope: ['profile', 'email']
	}));

	app.get('/auth/google/callback', passport.authenticate('google', {
		successRedirect: '/profile',
		failureRedirect: '/'
	}));
	// ===========================================================
	//==================== TWITTER ROUTES ========================
	// ===========================================================

	app.get('/auth/twitter', passport.authenticate('twitter'));

	//handle the info twitter sends back

	app.get('/auth/twitter/callback', passport.authenticate('twitter', {
		successRedirect: '/profile',
		failureRedirect: '/'
	}));

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

	// =============================================================================
	// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
	// =============================================================================

	/*
    // locally --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            successRedirect : '/profile', // redirect to the secure profile section
            failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
	
	*/
	
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