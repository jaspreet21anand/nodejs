var app = require('express')();
app.locals.title = "this is test";
app.get('/', function(req, res){
  res.send('hello world');
  console.log(app.locals.title);
  console.log('&&&&&&&&&&######################***************************');
}).listen(3000);