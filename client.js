var socket = io.connect('http://10.0.2.1:8082');
socket.on('ready', function(data){
	console.log(data);
});

function pull(direction){
console.log('sending pull');
	socket.emit('pull', direction);
}
