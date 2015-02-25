var app = require('express')();
var request = require('request');
var url = require('url');

app.get('/tweets/:username', function(req, res){
  var username = req.params.username;
  options = {
    protocol: 'https:',
    host: 'api.twitter.com',
    pathname: '/1/statuses/user_timeline.json',
    query: { screen_name: username, count: 10 }
  }

  var twitterUrl = url.format(options);
  console.log(twitterUrl);
  request(twitterUrl).pipe(res);
}).listen(8080);