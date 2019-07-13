const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router() // makes the variable a router
dishRouter.use(bodyParser.json());



dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all dishest to you.')
})
.post((req, res) => {
    res.end("Will add the dish: " + req.body.name + " with Description "+ req.body.description)
})
.put((req, res ) => {
    res.statusCode = 403;
    res.end("PUT operations not supported on /dishes");
})
.delete((req, res) => {
    res.end("Deleting all dishes");
})



dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res ) => {
    res.end('Will send dishId ' + req.params.dishId + ' To you.');
})
.post((req, res) => {
    res.end('Will ADD the dish: ' + req.body.name + " " +req.body.description)
})
.put((req, res)=> {
    res.end('PUT operation not supported on /dishes/:dishId');
})
.delete((req, res) => {
    res.end('Deleting the dish with Id: ' + req.params.dishId);
})

module.exports = dishRouter;