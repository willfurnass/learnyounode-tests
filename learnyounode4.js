var fs = require('fs');
var fname = process.argv[2];

fs.readFile(fname, 'utf8', function (err, data) {
   var n_newlines = data.split('\n').length - 1;
   console.log(n_newlines);
})
