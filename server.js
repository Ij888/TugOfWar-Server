var io = require('socket.io').listen(8082);

io.sockets.on('connection', function (socket) {
  socket.emit('ready', 'server ready');
  socket.on('pull', function (data) {
    console.log(data);
    if(data == "A"){
		socket.broadcast.emit('rope', 'A');	
    }else if(data == "B"){
		socket.broadcast.emit('rope', 'B');
    }
  });
});
