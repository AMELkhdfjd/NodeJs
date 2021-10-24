const express =  require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();


promotionRouter .use(bodyParser.json());
promotionRouter .route('/')

.all( (req, res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  
  .get( (req, res, next) =>
  { 
    res.end('will send all the promotions to you');
  
  })
  
  .post( (req, res, next) =>{
    res.end('will add the promotion :'+ req.body.name+'with details'+req.body.description);
  })
  
  .put( (req, res, next) =>{
    res.statusCode= 403;
  res.end('put operation not supported')})
  
.delete( (req, res, next) =>{
  res.end('deleting all the promotions');
  })


  promotionRouter.route('/:promotionId')

  .all( (req, res,next) =>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      next();
    })
    
    .get( (req, res, next) =>
    { 
      res.end('We will send details of the promotion: ' + req.params.promotionId + ' to you!')
    
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
  module.exports= promotionRouter ;