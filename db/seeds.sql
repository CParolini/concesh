USE concesh_db;

INSERT INTO venues (venue_name, latitude, longitude, sections, rows, seats)
VALUES ("Darrell K Royal-Texas Memorial Stadium", 30.2836813, -97.7325345, 39, 50, 25);

INSERT INTO vendors (vendor_name, venueId)
VALUES ("La Cucina: Italian Cantina", 1),
("Torchy's Tacos", 1);

INSERT INTO menu_items (item_name, item_price, vendorId)
VALUES ("Meatball Slider", 450, 1),
("Italian Sausage", 575, 1),
("Jumbo Dog", 525, 1),
("Spinach & Feta Pretzel", 475, 1),
("Texatalian Nachos", 525, 1),
("Trailer Park Taco", 450, 2),
("Green Chile Pork Taco", 475, 2),
("Green Chile Queso & Chips", 500, 2),
("Chips & Salsa", 375, 2);

