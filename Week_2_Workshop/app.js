//Importing middlewares
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// importing routers from current working directory
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var promoRouter = require('./routes/promoRouter');
var leaderRouter = require('./routes/leaderRouter');
var dishRouter = require('./routes/dishRouter');


// Using express
var app = express();


/**
 * DATABASE
 */
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/new_confusion';
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
connect.then(() => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });



/**
 * View Engine to set up. How to load static files
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/**
 * Using Middlewares
 */
app.use(logger('dev'));
// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.
app.use(express.json()); // Grabs the JSON Object

// Returns middleware that only parses urlencoded bodies and only 
// looks at requests where the Content-Type header matches the type option. 
// When a user posts it will be sent as req.params in url and body-parser parses
// into a json objects
app.use(express.urlencoded({ extended: false })); //Grabs the data if it is a string or array
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Directory for static files 



/**
 * URLS
 */
app.use('/', indexRouter);
//When going to /dishes URL endpoint use dishRouter which we declared in, line 14. So, the server knows,
// what to do when a user goes to that URL endpoint.
app.use('/dishes', dishRouter); 
app.use('/users', usersRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
