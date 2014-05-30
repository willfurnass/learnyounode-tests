var fs = require('fs')

var n_lines = fs.readFileSync(process.argv[2], 'utf8').toString().split('\n').length - 1
console.log(n_lines)
