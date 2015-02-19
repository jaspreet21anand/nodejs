var http = require('http');
var url = require('url');

http.createServer(function(req, res){
  var reqUrl = url.parse(req.url);
  var date = new Date(reqUrl['query'].slice(4));
  console.log(reqUrl);
  if(reqUrl['pathname'] == '/api/parsetime'){
    res.write(JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }));
  } else if(reqUrl['pathname'] == '/api/unixtime' ){
    res.write(JSON.stringify({ unixtime: date.getTime() }));
  }
  res.end();
}).listen(process.argv[2]);