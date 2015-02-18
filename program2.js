var length = process.argv.length;
var sum = 0;
for(var i = 2; i < length; i++) {
  sum += parseInt(process.argv[i]);
}
console.log(sum);