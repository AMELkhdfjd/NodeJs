//!this is the part is we use node Express module
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const  promotionsRouter = require('./routes/promotionRouter');
const leadersRouter = require('./routes/leadersRouter');

//! the reason why we use express for restapi is that for each endpoint we need the three methods get post delete and its too muchso its grouped in the express router to make it easy



const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use('/promotions', promotionsRouter);
app.use('/leaders', leadersRouter);
app.use('/dishes', dishRouter);



//todo if we dont use express
// app.all('/dishes', (req, res,next) =>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   next();
// })

// app.get('/dishes', (req, res, next) =>
// { ;
//   res.end('will send all the dishes to you');

// })

// app.post('/dishes', (req, res, next) =>{
//   res.end('will add the dish :'+ req.body.name+'with details'+req.body.description);
// })

// app.put('/dishes', (req, res, next) =>{
//   res.statusCode= 403;
// res.end('put operation not supported')})

// app.delete('/dishes', (req, res, next) =>{
// res.end('deleting all the dishes');
// })



//! the operations for dish/:dishid



// app.get('/dishes/:dishId', (req, res, next) =>
// { 
//   res.end('will send details of the dish :' + 
//   req.params.dishId);

// })

// app.post('/dishes/:dishId', (req, res, next) =>{
//   res.statusCode= 403;
//   res.end('post operation not supported')
// })

// app.put('/dishes/:dishId', (req, res, next) =>{
// res.write('updating the dish :' + req.params.dishId);
// res.end('will update the dish :' + req.body.name+ 'with details' + req.body.description);
// })

// app.delete('/dishes/:dishId', (req, res, next) =>{
//   res.write('deleting the dish :' + req.params.dishId);
// })



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