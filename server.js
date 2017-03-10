const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv');

// note that we load the process.env from `dotenv`
// before we start to load any of our own code.
const envfile = process.env.NODE_ENV === 'production' ? '.env' : '.dev.env';
dotenv.config({
  silent: true,
  path: `${__dirname}/${envfile}`,
});

// *now* load our custom Stripe charing module
// which we'll use in the router later on
const charge = require('./charge');

// create the server, and all the routes and configuration
// go against this `app`
const app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Import routes and give the server access to them.
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// expose `process` to the view templates
app.locals.process = process;

// POST /charge
app.post('/charge', (req, res, next) => {
  charge(req).then(data => {
    res.render('./public/thanks');
  }).catch(error => {
    res.render('error', error);
  });
});

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});
