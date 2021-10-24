const express =  require('express');
const bodyParser = require('body-parser');

const leadersRouter = express.Router();


leadersRouter.use(bodyParser.json());
leadersRouter.route('/')

.all( (req, res,next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  
  .get( (req, res, next) =>
  { 
    res.end('will send all the leaders to you');
  
  })
  
  .post( (req, res, next) =>{
    res.end('will add the leader :'+ req.body.name+'with details'+req.body.description);
  })
  
  .put( (req, res, next) =>{
    res.statusCode= 403;
  res.end('put operation not supported')})
  
.delete( (req, res, next) =>{
  res.end('deleting all the leaders');
  })

  leadersRouter.route('/:leaderId')

  .all( (req, res,next) =>{
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      next();
    })
    
    .get( (req, res, next) =>
    { 
      res.end('We will send details of the leader: ' + req.params.leaderId + ' to you!')
    
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
  module.exports= leadersRouter;