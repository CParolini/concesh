// Venue Variables
var selectedVenue = 1;
var sections;
var rows;
var seats;

// Vendor Variables
var vendorInfo;

// Google Signin Functions
function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log('User signed out.');
	});
}

// Database to HTML interaction
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