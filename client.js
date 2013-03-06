var socket =io.connect('http://localhost:8082');
function pull(direction){
	socket.emit('pull', direction);
	console.log('Received pull '+direction);
}