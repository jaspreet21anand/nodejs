var net  = require('net');
var server = net.createServer(function(socket){
  var date = new Date();
  var yyyy = date.getFullYear().toString();
  var mm = (date.getMonth() + 1).toString();
  var dd = date.getDate().toString();
  socket.end(yyyy + '-' + (mm[1]?mm:'0'+mm) + '-' + (dd[1]?dd:'0'+dd) + ' ' + date.getHours() + ':' + date.getMinutes() + '\n');
})
server.listen(process.argv[2]);