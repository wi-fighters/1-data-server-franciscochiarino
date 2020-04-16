// Import Modules
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Import Routers
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

// Create Server
const app = express();

// Set Port
const port = process.env.PORT || 4000;

// Listen
app.listen(port, console.log("server-running"));

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Home
app.use('/', indexRouter);

// APIs
app.use('/api', apiRouter);

// Catch 404
app.use(function(req, res, next) {
  next(createError(404));
})

// Error Handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})

module.exports = app;