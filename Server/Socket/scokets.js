'use strict';

var sio = require('socket.io');

module.exports = function(server){

var message = "いらっしゃいませ"

var io = sio.listen(server);

var signaltime = new Date();

	// Scoketに、名前はHelloというがモニタリングしている。
io.on('connection', function(socket) {   
		// Socket On Notice
		socket.on('event',function(data){
			console.log('Socket On');
		});
		// Socket Off Notice
		socket.on('disconnect',function(){
			console.log('Socket Off');
		});

	    // Send Message
	    socket.emit('message', {
	        message: message
	    });
	    setInterval(function() {
	    	signaltime = new Date().toString();
	    	socket.emit('signaltime',{signaltime:signaltime})}
	    	,1000);
   	});	
};

