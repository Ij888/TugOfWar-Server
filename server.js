var io = require('socket.io').listen(8082);
var socketid;

io.sockets.on('connection', function (socket) {
  socket.emit('ready', 'Server ready');
  socket.on('itsamemario', function (data) {
        socketid = socket.id;
    });
  socket.on('pull', function (data) {
	if(socketid != null){
		io.sockets.socket(socketid).emit('rope', data);	
		console.log('client is connected');
	}else{
		console.error('client is not connected yet');
	}
    });
  });
