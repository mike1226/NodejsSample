
var express = require('express')
  , passport = require('passport')
  , config = {}
  , env = require('./env')
  , utils = require('../utils')
  , bodyParser = require('body-parser');

  module.exports = Config;


  function Config(app){

  	try{
  		config = require('./config.json');
  	} catch(err){
  		console.log('Failed from config %j',config);
  	}

  	utils.merge(config,env);

  	app.set('config',config);
  	app.set('port',config.app.port);

  	// Config to Session and Cookies 
  	// app.use(express.session({
  	// 	key: "nikkeiSample",
  	// 	store: app.get('sessionStore'),
  	// 	cookie:{
  	// 		maxAge:config.session.age || null
  	// 	}

  	// }));
	  // user of express body parse middleware
  	//app.use(express.bodyParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    // use of passport
    app.use(passport.initialize());

  }