var http = require('http');
var url = process.argv[2];

http.get(url, function callback (response_stream) {
    response_stream.setEncoding('utf8');
    response_stream.on("data", console.log);
    response_stream.on("error", console.error);
});
