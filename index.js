//!this is the part is we use node Express module
const express = require('express');
const http = require('http');
const morgan = require('morgan');


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

//? to tell express that the html files are in public folder and use them
app.use(express.static(__dirname+ '/public'));


app.use((req, res, next) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>this is an express server</h1></body></html>')
});

const server = http.createServer(app);
server.listen(port, hostname, () =>{
  console.log(` Server running at http://${hostname}:${port}`);
});

































//!this is the part is we use node http module


// const http  = require ('http');


// const fs = require('fs');
// const path = require('path');

// const hostname = 'localhost';
// const port = 3000;


// const server = http.createServer((req, res) => {
//   console.log('Request for ' + req.url + ' by method ' + req.method);

//   if (req.method == 'GET') {
//     var fileUrl;
//     if (req.url == '/') fileUrl = '/index.html';
//     else fileUrl = req.url;

//     var filePath = path.resolve('./public'+fileUrl);
//     const fileExt = path.extname(filePath);
//     if (fileExt == '.html') {
//       fs.exists(filePath, (exists) => {
//         if (!exists) {
//           res.statusCode = 404;
//           res.setHeader('Content-Type', 'text/html');
//           res.end('<html><body><h1>Error 404: ' + fileUrl + 
//                       ' not found</h1></body></html>');
//           return;
//         }
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         fs.createReadStream(filePath).pipe(res);
//       });
//     }
//     else {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/html');
//       res.end('<html><body><h1>Error 404: ' + fileUrl + 
//               ' not a HTML file</h1></body></html>');
//     }
//   }
//   else {
//       res.statusCode = 404;
//       res.setHeader('Content-Type', 'text/html');
//       res.end('<html><body><h1>Error 404: ' + req.method + 
//               ' not supported</h1></body></html>');
//   }
// })

// server.listen(port, hostname, () =>{
//     console.log(` Server running at http://${hostname}:${port}`);
// });