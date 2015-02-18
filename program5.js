var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
  if(err) throw err;
  for(var i in list) {
    if(list[i].split('.')[1] == process.argv[3]) {
      console.log(list[i]);
    }
  }
})