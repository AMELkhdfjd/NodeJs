const express =  require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();


dishRouter.use(bodyParser.json());
dishRouter.route('/')

.all( (req, res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  
  .get( (req, res, next) =>
  { 
    res.end('will send all the dishes to you');
  
  })
  
  .post( (req, res, next) =>{
    res.end('will add the dish :'+ req.body.name+'with details'+req.body.description);
  })
  
  .put( (req, res, next) =>{
    res.statusCode= 403;
  res.end('put operation not supported')})
  
.delete( (req, res, next) =>{
  res.end('deleting all the dishes');
  })

  //adding the dishId operations

  dishRouter.route('/:dishId')

.all( (req, res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  
  .get( (req, res, next) =>
  { 
    res.end('We will send details of the dish: ' + req.params.dishId + ' to you!')
  
  })
  
  .post( (req, res, next) =>{
    res.end('will add the dish :'+ req.body.name+'with details'+req.body.description);
  })
  
  .put( (req, res, next) =>{
    res.statusCode= 403;
  res.end('put operation not supported')})
  
.delete( (req, res, next) =>{
  res.end('deleting all the dishes');
  })


  
//!we need to export the module
  module.exports= dishRouter;