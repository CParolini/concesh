USE concesh_db;

INSERT INTO venues (venue_name, latitude, longitude)
VALUES ("Darrell K Royal-Texas Memorial Stadium", 30.2836813, -97.7325345);

INSERT INTO vendors (vendor_name, venueId)
VALUES ("Torchy's Tacos", 1);

INSERT INTO menu_items (item_name, item_price, vendorId)
VALUES ("Trailer Park Taco", 4.50, 1),
("Green Chile Pork Taco", 4.75, 1),
("Green Chile Queso & Chips", 5.00, 1),
("Chips & Salsa", 3.75, 1);