var fs = require('fs');
var path = require('path');

var dirname = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirname, function (err, list) {
    list.forEach(function (f, idx, arr) {
        if (path.extname(f) === ('.' + ext)) {
            console.log(f);
        }
    })
});


