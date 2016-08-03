//models/user.js

var mongoose = require('mongoose'),
bcrypt = require('bcrypt-nodejs');


//define schema for user models

var userSchema = mongoose.Schema({

	local            : {
        email        : String,
        password     : String,
    },

    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },

    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },

    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// methods ===============
//generate a hash

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check if password is valid

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app

module.exports = mongoose.model('User', userSchema);