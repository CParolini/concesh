// Requiring our models
var db = require("../models");
  
// Routes
module.exports = function(app) {

  // GET route for getting all of the menu items
  app.get("/api/allitems", function(req, res) {
    db.menu_item.findAll({}).then(function(dbMenuItem) {
      res.json(dbMenuItem);
    });
  });
};
