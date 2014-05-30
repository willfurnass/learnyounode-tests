var fs = require('fs');
var path = require('path');

var filt_dir = function (dir_name, ext, callback) {
    fs.readdir(dir_name, function (err, list) {
        if (err) {
            return callback(err, null)
        }
        var filt_list = list.filter(function (f_name) {
            return path.extname(f_name) === ('.' + ext);
        });
        callback(null, filt_list);
    });
};

module.exports = filt_dir
