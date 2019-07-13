const express = require('express');
const bodyParser = require('body-parser');
const locationsRouter = express.Router();
locationsRouter.use(bodyParser.json());



var locations = ["Tacoma", "Marysville", "Seattle", "Spokane", "Bellingham"];


locationsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req, res ) => {
    res.end("<html><body><form action='/locations' method='post'><label for='location'>next location<input type='text' name='location' /></label><button type='submit'>submit</button></form></body></html>")
})
.post((req, res) => {
    locations.push(req.body.location)
    res.end('Will Add the location ' + req.body.location + "New locations " + locations.join('  '));
})

module.exports = locationsRouter;