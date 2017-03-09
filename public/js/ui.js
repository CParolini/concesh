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

// Database to HTML interaction functions
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
			console.log(vendorInfo[i]);
			// $('.carousel-inner').data(vendorInfo[i]);
		}
    });
}

$(document).ready(function(){

	$(".search-container").hide();
	$(".welcome").remove();
	$("#checkout").hide();
	$(".abcRioButtonContentWrapper").show();
	// $("#login").hide();
	// $("#signup").hide();

	// Initial login button click
	$("#login").click(function() {
		$(".welcome-container").hide();
		$(".buttons").hide();
		$(".welcome").hide();
		$(".search-container").hide();
		$(".login-container").show();
	});

	// Submits credentials after login or registration and sends user to seat selection
	$(".g-signin2").click(function() {

		$(".regform-container").hide();
		$(".login-container").hide();
		$(".search-container").show();

		// Fill in dropdown menu for section/row/seat
		getVenueInfo();
	});

	$(".search-submit").click(function(){
		$(".search-container").hide();
		$(".tix-info-container").show();
	});

	$(".search-submit").click(function(){
		$("body").css("background-image", "url(../images/DKRsmall.jpg)");
	});

	// Submit seat info and shows menus
	$("#tix-submit").click(function() {
		$(".tix-info-container").hide();
		$(".menu-container").show();
		$(".torchy").show();
		$(".cucina").hide();
		$("#checkout").show();
		$(".torchyIcon").css("background", "white");

		// Fill in vendor and menu item information
		getMenus();
	});

	$(".torchy").click(function() {
		$(".torchy").hide();
		$(".cucina").show();
		$(".cucinaIcon").css("background", "white");
		$(".torchyIcon").css("background", "black");
	});

	$(".cucina").click(function() {
		$(".torchy").show();
		$(".cucina").hide();
		$(".torchyIcon").css("background", "white");
		$(".cucinaIcon").css("background", "black");
	});

	// Checkout and send payment
	$("#checkout").click(function() {
		$(".tix-info-container").hide();
		$(".menu-container").hide();
		$("#checkout").hide();
		$("#checkout-modal").show();
	});
});

// Google autocomplete search that pulls information for the location that is chosen by the user. We will use the longitude and lattitude to locate the venue.
var placeSearch, autocomplete;
var componentForm = {
	street_number: 'short_name',
	route: 'long_name',
	locality: 'long_name',
	administrative_area_level_1: 'short_name',
	country: 'long_name',
	postal_code: 'short_name'
};
// console.log(autocomplete);

function initAutocomplete() {
	// Create the autocomplete object, restricting the search to geographical
	// location types.
	autocomplete = new google.maps.places.Autocomplete(
		/** @type {!HTMLInputElement} */
		(document.getElementById('example-search-input')), {
			types: ['geocode']
		});

	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
	// Get the place details from the autocomplete object.
	var place = autocomplete.getPlace();

	console.log((place.geometry.viewport.b.f + place.geometry.viewport.b.b)/2);
	console.log((place.geometry.viewport.b.f + place.geometry.viewport.b.b)/2);
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var geolocation = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			var circle = new google.maps.Circle({
				center: geolocation,
				radius: position.coords.accuracy
			});
			autocomplete.setBounds(circle.getBounds());
		});
	}
}
