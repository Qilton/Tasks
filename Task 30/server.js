// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;
  if (filePath === './') filePath = './home.html';
  if (filePath === './home') filePath = './home.html';
  if (filePath === './about') filePath = './about.html';
  if (filePath === './contact') filePath = './contact.html';

  const extname = path.extname(filePath);
  const contentType = extname === '.html' ? 'text/html' : 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Page Not Found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        fs.readFile('./404.html', (err, content) => {
          res.end(content, 'utf-8');
        });
      } else {
        // Server Error
        res.writeHead(500);
        res.end('Sorry, there was a problem with the server.');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
