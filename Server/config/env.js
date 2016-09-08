/**
 * Module dependencies.
 */

var env = process.env;

/**
 * Expose environment configuration
 */

module.exports = { 
  auth: {    
    github: {
      clientid: env.GITHUB_CLIENT_ID,
      clientsecret: env.GITHUB_CLIENT_SECRET,
      callback: env.GITHUB_CALLBACK
    }
  },
  app: {
    port: env.PORT
  }  
};