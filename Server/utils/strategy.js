/*
 * Module dependencies
 */

var passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy;

/**
 * Expose Authentication Strategy
 */

module.exports = Strategy;

/*
 * Defines Passport authentication
 * strategies from application configs
 *
 * @param {Express} app `Express` instance.
 * @api public
 */

function Strategy(app) {
    var config = app.get('config');

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });


    if (config.auth.github.clientid.length) {

        passport.use(new GitHubStrategy({
                clientID: config.auth.github.clientid,
                clientSecret: config.auth.github.clientsecret,
                callbackURL: config.auth.github.callback
            },
            function(token, tokenSecret, profile, done) {
                if (!profile) {
                    console.log('Not Loging');
                } else {
                    console.log('Github id is ' + profile.id + ' logind !')
                    return done(null, profile);
                }
            }
        ));
    }
}