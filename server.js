'use strict'
//first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Sale = require('./model/sales');

//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set 
//it up, or 3001
var port = process.env.API_PORT || 3001;

var mongoDB = 'mongodb://admin:C2K88HQzrhB4dKj@ds115671.mlab.com:15671/get-a-car';

mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//now we should configure the API to use bodyParser and look for 
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
 res.json({ message: 'API Initialized!'});
});

router.route('/sales')
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    Sale.find(function(err, sales) {
      if (err)
        res.send(err);
      //responds with a json object of our database comments.
      res.json(sales)
    });
  })//post new comment to the database
  .post(function(req, res) {
    var sale = new Sale();
    //body parser lets us use the req.body
    (req.body.name) ? sale.name = req.body.name : null;
    (req.body.address) ? sale.address = req.body.address : null;
    (req.body.city) ? sale.city = req.body.city : null;
    (req.body.phoneNumber) ? sale.phoneNumber = req.body.phoneNumber : null;
    (req.body.email) ? sale.email = req.body.email : null;
    (req.body.carModel) ? sale.carModel = req.body.carModel : null;
    (req.body.carYear) ? sale.carYear = req.body.carYear : null;
    (req.body.carManufacturer) ? sale.carManufacturer = req.body.carManufacturer : null;

    sale.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Sale successfully added!' });
    });
});

  //Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});