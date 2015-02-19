var http = require('http');
var counter = 0;
http.createServer(function(request, response) {
  // console.log('connection created' + (++counter) + '\n');
  request.on('data', function(data) {
    if(request.method == 'POST'){
      response.write(data.toString().toUpperCase());
    }
  })
  request.on('end', function(){
    response.end();
  })

}).listen(process.argv[2]);