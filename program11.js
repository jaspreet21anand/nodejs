var fs = require('fs');
var http = require('http');
var filePath = process.argv[3];

var server = http.createServer(function(req, res) {
  var fileReadStream = fs.createReadStream(filePath);
  fileReadStream.pipe(res);
});

server.listen(process.argv[2]);