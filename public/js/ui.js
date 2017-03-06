// Venue Variables
var selectedVenue = 1;
var sections;
var rows;
var seats;

// Vendor Variables
var vendorInfo;

function getVenueInfo() {
    var query = "/api/getvenueinfo/" + selectedVenue;
    $.get(query, function(data) {
        sections = data.sections;
        rows = data.sections;
        seats = data.seats;

		/*
		Use this area to write JQuery to fill in information for the dropdown menus for section/row/seat number
		*/
    });
}

function getMenus() {
    var query = "/api/getvendors/" + selectedVenue;
    $.get(query, function(data) {
        vendorInfo = data;
		for(var i=0; i<vendorInfo.length; i++) {
			/*
			Use this area to write JQuery to fill in the carousel with each vendor and corresponding menu.
			*/
		}
    });
}

$(document).ready(function(){

	// Initial login button click
	$("#login").click(function() {
		$(".welcome-container").hide();
		$(".login-container").show();
	});

	// Initial signup button click
	$("#signup").click(function() {
		$(".welcome-container").hide();
		$(".regform-container").show();
	});

	// Submits credentials after login or registration and sends user to seat selection
	$(".submitCredentials").click(function() {
		$(".regform-container").hide();
		$(".login-container").hide();
		$(".tix-info-container").show();

		// Fill in dropdown menu for section/row/seat
		getVenueInfo();
	});

	// Submit seat info and shows menus
	$("#tix-submit").click(function() {
		$(".tix-info-container").hide();
		$(".menu-container").show();

		// Fill in vendor and menu item information
		getMenus();
	});

	// Checkout and send payment
	$("#checkout").click(function() {
		$(".tix-info-container").hide();
		$(".menu-container").hide()
		$("#checkout-modal").show();
	});
});