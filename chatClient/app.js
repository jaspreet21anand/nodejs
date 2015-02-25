var express = require('express');
var socket = require('socket.io');
var app = express();
var io = socket.listen(app.listen(8080));

io.sockets.on('connection', function(client) {
  console.log('client connected...');
  client.emit('messages', { hello: 'world' });
})

app.get('/', function(request, response){
  response.sendfile(__dirname + '/index.html');
});