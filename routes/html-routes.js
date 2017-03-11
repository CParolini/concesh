// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

	// index route loads index.html
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/index.html"));
	});

	app.get("/complete", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/complete.html"));
	});
};