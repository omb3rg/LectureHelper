var app = require('express')();
var http = require('http').Server(app);
var filepath = 'D:\\Dropbox\\NodeTest\\';
var io = require('socket.io')(http);
var helpCounter=0;
app.get('/admin', function(req, res){
	res.sendFile(filepath + 'admin.html');
});
app.get('/', function(req, res){
	res.sendFile(filepath + 'index.html');
});
http.listen(3000, function(){
	console.log('listening on *:3000');
});

io.on('connection', function(socket){
	console.log('user connected');
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log('chat message:' + msg);
	});
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('help', function(){
		helpCounter++;
		io.emit("adminTotalCount",helpCounter);
	});

});