var io = require("socket.io").listen(8082);

io.sockets.on("connection", function(socket){
	socket.emit('ready', 'Server ready');
	socket.on('pull', function(data){
		socket.broadcast.emit('rope', data);
	});
});
