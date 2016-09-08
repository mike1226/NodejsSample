/*
 * Module dependencies
 */

var passport = require('passport'),
    utils = require('../utils');

module.exports = Router;

/**
 * Defines routes for application
 *
 * @param {Express} app 'Express' instance
 * @api public
 */
function Router(app) {

    /*
     *  Use GitHub Login
     */

    var config = app.get('config');

    if (config.auth.github.clientid.length) {
        app.get('/auth/github', passport.authenticate('github', {
            scope: 'user:email'
        }));

        app.get('/auth/github/callback',
            passport.authenticate('github', {
                failureRedirect: '/'
            }),
            function(req, res) {
                res.cookie('loginedUser', req.user.emails[0].value);
                res.redirect(301, 'http://localhost:3000');
            }
        );
    }

}