var m = require('./program6');

function printFiles(err, filteredFiles) {
  if (err) throw err;
  for(var i in filteredFiles){
    console.log(filteredFiles[i]);
  }
}

m(process.argv[2], process.argv[3], printFiles)