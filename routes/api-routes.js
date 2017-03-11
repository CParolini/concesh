// Requiring our models
var db = require("../models");

// *now* load our custom Stripe charing module
// which we'll use in the router later on
const charge = require('../charge');

// Routes
module.exports = function(app) {

    // GET route for getting all of the venues
    app.get("/api/getvenues", function(req, res) {
        db.venue.findAll({}).then(function(dbVenue) {
            res.json(dbVenue);
        });
    });

    // GET route to get info about selected venue
    app.get("/api/getvenueinfo/:venueid", function(req, res) {
        db.venue.findAll({
            where: {
                id: req.params.venueid
            }
        }).then(function(dbVenueInfo) {
            res.json(dbVenueInfo);
        });
    });

    // GET route for getting all vendors at a venue
    app.get("/api/getvendors/:venueid", function(req, res) {
        db.vendor.findAll({
            where: {
                venueId: req.params.venueid
            }
        }).then(function(dbVendor) {
            res.json(dbVendor);
        });
    });

    // GET route for getting all menu items from a vendor
    app.get("/api/getitems/:vendorid", function(req, res) {
        db.menu_item.findAll({
            where: {
                vendorId: req.params.vendorid
            }
        }).then(function(dbMenuItem) {
            res.json(dbMenuItem);
        });
    });

	// POST /charge
	app.post('/charge', (req, res, next) => {
		charge(req).then(data => {
			console.log("works");   
			//res.redirect("/complete")
		}).catch(error => {
			console.log("no work");
		});
	});
};
