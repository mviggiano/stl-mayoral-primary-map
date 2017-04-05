//app/index.js
var http = require('http');
var fs = require ('fs');
var url = require('url');
var port = process.env.PORT || 5000;
// var coloring = require('../resources/coloring');

http.createServer(function(req,res) {
    var pathname = url.parse(req.url).pathname;
    console.log("Request for " + pathname + " received.");

    // Read the requested file content from file system
    fs.readFile("app/" + pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            //Page found      
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, {'Content-Type': 'text/html'}); 
         
            // Write the content of the file to response body
            res.write(data.toString());
            // coloring.init();
        }
        res.end();
    });
}).listen(port);

console.log('Server running on port %s', port);