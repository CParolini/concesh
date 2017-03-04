// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {
  
  // Home route loads home.html
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  // Index route loads index.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

  // Thanks route loads thanks.html
  app.get("/thanks", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/thanks.html"));
  });

  // UI route loads ui.html
  app.get("/ui", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/ui.html"));
  });
};