USE concesh_db;

INSERT INTO venues (venue_name, latitude, longitude)
VALUES ("Darrell K Royal-Texas Memorial Stadium", 30.2836813, -97.7325345);

INSERT INTO vendors (vendor_name, venueId)
VALUES ("La Cucina: Italian Cantina", 1),
("Torchy's Tacos", 1);

INSERT INTO menu_items (item_name, item_price, vendorId)
VALUES ("Meatball Slider", 4.50, 1),
("Italian Sausage", 5.75, 1),
("Jumbo Dog", 5.25, 1),
("Spinach & Feta Pretzel", 4.75, 1),
("Texatalian Nachos", 5.25, 1),
("Trailer Park Taco", 4.50, 2),
("Green Chile Pork Taco", 4.75, 2),
("Green Chile Queso & Chips", 5.00, 2),
("Chips & Salsa", 3.75, 2);

