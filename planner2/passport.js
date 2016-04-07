var LocalStrategy = require('passport-local').Strategy,

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

		user+-++
	})



}