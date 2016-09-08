
/*
 * Module dependencies
 */

var passport = require('passport')
  , utils = require('../utils');

module.exports = Router;

/**
* Defines routes for application
*
* @param {Express} app 'Express' instance
* @api public
*/
function Router(app){

	/*
	*  Use GitHub Login
	*/	

  	var config = app.get('config');

	if(config.auth.github.clientid.length) {
	    app.get('/auth/github', passport.authenticate('github'));

	    app.get('/auth/github/callback', 
	      passport.authenticate('github', {
	        successRedirect: '/',
	        failureRedirect: '/'
	      })
	    );
	  }

}

