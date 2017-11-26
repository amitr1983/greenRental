var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/productModel'), //created model loading here
  Category = require('./api/models/categoryModel'), //created model loading here
  bodyParser = require('body-parser'),
  passport = require('passport'),
  session = require('express-session'),
  validator = require('express-validator');

var productRoutes = require('./api/routes/productRoutes');
var categoryRoutes = require('./api/routes/categoryRoutes');

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Renterdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());	

productRoutes(app)
categoryRoutes(app)

app.listen(port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

console.log('todo list RESTful API server started on: ' + port);