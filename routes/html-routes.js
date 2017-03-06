// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

	// index route loads index.html
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/index.html"));
	});

	// Home route loads home.html
	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

	// Payment route loads payment.html
	app.get("/payment", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/payment.html"));
	});

	// Thanks route loads thanks.html
	app.get("/thanks", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/thanks.html"));
	});
};