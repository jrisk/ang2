var LocalStrategy = require('passport-local').Strategy,
FacebookStrategy = require('passport-facebook').Strategy;

//load auth variables
var configAuth = require('./auth'),
//load user model
User = require('../models/user');

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

	//===============================================================
	//============FACEBOOK STRATEGY =================================
	//===============================================================

	passport.use(new FacebookStrategy({

		//pull in app id and secret from auth.js
		clientID : configAuth.facebookAuth.clientID,
		clientSecret : configAuth.facebookAuth.clientSecret,
		callbackURL : configAuth.facebookAuth.callbackURL,
		profileFields: ['id', 'emails', 'name']
	},

	//facebook will send back a token and the profile
	function(token, refreshToken, profile, done) {

		//async
		process.nextTick(function() {

			//find user in db based on facebook id
			console.log(profile);

			User.findOne({ 'facebook.id' : profile.id }, function(err,user) {
				if (err)
					return done(err);

				if (user) {
					return done(null, user);
				}
				else {
					//if no user found with that facebook id, create them
					var newUser = new User();

					//set all the facebook info in our user model

					newUser.facebook.id = profile.id;
					newUser.facebook.token = token;
					newUser.facebook.email = profile.emails[0].value;
					newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName //could fail?

					newUser.save(function(err) {
						if (err)
							throw err;
						return done(null, newUser);
					});
				} //end of else block
			}) //end db ops
		}) //end process nexttick block
	} //end fbook strategy callback

	)); //end fbook strategy use

	//===============================================================
	//============LOCAL STRATEGY ====================================
	//===============================================================

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
				newUser.local.password = newUser.generateHash(password);

				// insert new user into mongo database

				newUser.save(function(err) {
					if (err)
						throw err;
					return done(null, newUser);
				});
				}
			}) //end db lookup (findOne) then insert (save)

		}) // end process.nextTick
	})); //end 2nd function (callback) and end passport.use local-signup strategy

	//========== LOCAL LOGIN
	//using named strategies because we have a signup and login
	//by default, just called local

	passport.use('local-login', new LocalStrategy ({
		//override to use email instead of username
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true //pass entire request
	},
	function(req, email,password, done) {
		//find user whos email is same as forms email
		User.findOne({ 'local.email' : email }, function(err, user) {
			if (err)
				return done(err);
			//if no user found, return message
			if (!user)
				return done(null, false, req.flash('loginMessage', 'No user found'));

			//if user found, but password wrong

			if (!user.validPassword(password))
				return done(null, false, req.flash('loginMessage', 'Wrong password and/or username'));

			//all is well, return the successfully found user
			return done(null, user);
		});

	})
	);
}