var filt_dir = require('./learnyounode6_filt_dir');

var dir_name = process.argv[2];
var ext = process.argv[3]; 

var arr = [];
filt_dir(process.argv[2], process.argv[3], function callback (err, arr) {
   arr.forEach(function (f_name) {
      console.log(f_name); 
   })
});

return arr;


