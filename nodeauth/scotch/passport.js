var LocalStrategy = require('passport-local').Strategy,
passport = require('passport'),

//load user model
User = require('./user.js');

//expose functions to app using module.exports

module.exports = function(passport) {

	//=====Passport session setup======

	//serialize user for session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	//deserialize user
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	//======= LOGIN SETUP
	//use named strategies because one for SIGNUP and one for LOGIN

	passport.use('local-signup', new LocalStrategy({
		//local uses username and password by default, we override this

		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true //pass entire request to callback
	},

	function(req, email, password, done) {
		//async: User.findOne wont fire unless data is sent back
		process.nextTick(function() {

		//find a user whose email is the same as the forms email
		// check to see if user logging in already exists
		User.findOne({ 'local.email' : email }, function(err, user) {
			//if any errors, return the error
			if (err)
				return done(err);

			//check for user existence

			if (user) {
				return done(null, false, req.flash('signupMessage', 'That email is in use'));
			}
			else {
				//if no user with that email, create the user
				var newUser = new User();

				//set local User newUser's credentials
				newUser.local.email = email;
				newUser.local.password = password;

				// insert new user into mongo database

				newUser.save(function(err) {
					if (err)
						throw err;
					return done(null, newUser);
				});
				}
			}) //end db lookup (findOne) then insert (save)

		}) // end process.nextTick
	})) //end 2nd function (callback) and end passport.use local-signup strategy 

}