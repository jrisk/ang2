//expose config directly to app using module.exports

module.exports = {

	'facebookAuth' : {
		'clientID' : '999580780091785',
		'clientSecret': '55c0c35e97644a638c7617d459d2ab27',
		'callbackURL' : 'http://localhost:3001/auth/facebook/callback'
	},

	   'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:3001/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:3001/auth/google/callback'
    }
};