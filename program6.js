var fs = require('fs');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, files) {
    if(err) callback(err, []);
    var filteredFiles = [];
    for (var i in files) {
      if (files[i].split('.')[1] == ext) {
        filteredFiles.push(files[i]);
      }
    }
    callback(err, filteredFiles);
  })
}