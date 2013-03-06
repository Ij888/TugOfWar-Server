var io = require('socket.io').listen(8082);
var app_socket_id;

io.sockets.on('connection', function (socket) {
  
  socket.emit('ready', 'Server ready');
  
  //Listen for app to connect
  socket.on('itsamemario', function (data) {
    app_socket_id = socket.id;
    console.log('client app connected');
  });
  
  //Listen for players sending pull rope signals
  socket.on('pull', function (data) {
    if(app_socket_id != null){
		  io.sockets.socket(app_socket_id).emit('rope', data);	
		  console.log('client app is connected');
    }else{
		  console.error('client app is not connected yet');
    }
  });
});
