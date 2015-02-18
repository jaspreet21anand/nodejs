var http = require('http');
var endCounter = 0;
var responseData = {};
var urls = process.argv.slice(2);

function GetRequest(url) {
  this.url = url;
  responseData[this.url] = '';
}

GetRequest.prototype.receiveData = function() {
  var _this = this;
  http.get(this.url, function(res){
    res.on('data', function(data){
      responseData[_this.url] += data.toString();
    });
    res.on('end', function(){
      endCounter++;
      if(endCounter == urls.length){
        for(var key in responseData){
          console.log(responseData[key]);
        }
      }
    });
  });
}

for(var i in urls) {
  new GetRequest(urls[i]).receiveData();
}