var net = require('net');

var sockets = [];
// net.createServer(function(socket){
//   socket.on('data', function(data){
//     for(var i in sockets){
//       if(!(sockets[i] == socket)){
//         sockets[i].write('data')
//       }
//     }
//   })
// }).listen(8000);
// var hh = function(chunk){
//   var chunk = process.stdin.read();
//   if(chunk){
//     process.stdout.write(chunk.toString());
//     process.stdin.removeListener('readable', hh);
//   }
// }
// process.stdin.on('readable', hh)
var register = function(name) {
  if(!(name.toString().trim() == '')){
    this['name'] = name.toString().trim();
    this.write('Good to go!! Type q* to exit. Enjoy chatting.. \n');
    displayPrompt(this);
    sockets.push(this);
    this.on('data', broadcast);
  } else {
    this.write('Please input a name to start!! Try again!!\n');
    this.end();
  }
}

var broadcast = function(message) {
  if((message.toString().trim() == 'q*')) {
    this.end('Good Bye..\n');
    var j = sockets.indexOf(this);
    sockets.splice(j, 1);
  } else {
    for(var i in sockets){
      if(!(sockets[i] == this)){
        sockets[i].write('\r' + this.name + ': ' + message);
        displayPrompt(sockets[i]);
      }
    }
  }
}

var displayPrompt = function(socket) {
  socket.write(socket.name + ': ');
}

net.createServer(function(socket){
  socket.write('Enter your name to start: ');
  socket.once('data', register);
}).listen(8000);