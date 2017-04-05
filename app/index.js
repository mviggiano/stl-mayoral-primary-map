// app/index.js
const http = require('http');
const fs = require('fs');
const url = require('url');

const port = process.env.PORT || 5000;

http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  console.log(`Request for ${pathname} received.`);

  if (pathname === '/' || !pathname || typeof pathname === 'undefined') {
    console.log('Redirecting to index.');
    res.writeHead(302, { location: 'index.html', 'Content-Type': 'text/html' });
    res.end();
  }

  // Read the requested file content from file system
  fs.readFile(`app/${pathname.substr(1)}`, (err, data) => {
    if (err) {
      console.log(err);
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      // Page found
      // HTTP Status: 200 : OK
      // Content Type: text/plain
      res.writeHead(200, { 'Content-Type': 'text/html' });
      // Write the content of the file to response body
      res.write(data.toString());
      // coloring.init();
    }
    res.end();
  });
}).listen(port);

console.log('Server running on port %s', port);
