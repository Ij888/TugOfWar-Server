var socket = io.connect('http://192.168.1.148:8082');
socket.on('ready', function(data){
	console.log(data);
});

function pull(direction){
console.log('sending pull');
	socket.emit('pull', direction);
}
