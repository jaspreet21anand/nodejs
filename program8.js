http = require('http')
http.get(process.argv[2], function(response) {
  var streamData = '';
  response.on('data', function(data) {
    streamData += data.toString();
  });
  response.on('end', function(){
    console.log(streamData.length);
    console.log(streamData);
  });
})