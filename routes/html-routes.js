// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {
  
  // Index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};