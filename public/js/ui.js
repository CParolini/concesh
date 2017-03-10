// Venue Variables
var selectedVenue = 1;
var sections;
var rows;
var seats;

// Vendor Variables
var vendorInfo;

// Google Signin Variables
var profile;

// Google Signin Functions
function renderButton() {
	gapi.signin2.render("my-signin2", {
		"scope": "profile email",
		"width": 240,
		"height": 50,
		"longtitle": true,
		"theme": "dark",
		"onsuccess": onSuccess,
		"onfailure": onFailure
	});
};

function onSuccess(googleUser) {
	profile = googleUser.getBasicProfile();
	checkIfLoggedIn();
	console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}

function onFailure(error) {
	console.log(error);
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
			console.log("User signed out.");
			$("#submitCredentials").hide();
			$("#signout").hide();
			$(".current-user-container").hide();
		});
}

function checkIfLoggedIn() {
	if (profile) {
		console.log("Signed in");
		$("#submitCredentials").show();
		$("#signout").show();
		$(".current-user-container").show();
		$("#currentUser").html(profile.ig + " " + profile.wea + "<br/>");
		$("#currentUser").append($("<img>",{id:"theImg",src: profile.Paa}));
		$("#emailReceipt").html("<p>" + profile.U3 + "</p>");
	} else {
		console.log("Not signed in")
		$("#signout").hide();
		$("#submitCredentials").hide();
		$(".current-user-container").hide();
	}
}

// Database to HTML interaction functions
function getVenueInfo() {
	var query = "/api/getvenueinfo/" + selectedVenue;
	$.get(query, function(data) {
		sections = data.sections;
		rows = data.sections;
		seats = data.seats;
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

	$(".search-container").hide();

	// Initial start button click
	$("#start").click(function() {
		$(".welcome-container").hide();
		$(".buttons").hide();
		$(".login-container").show();
		$("#submitCredentials").hide();

		// Check if user is already signed into Google
		checkIfLoggedIn()
	});

	// Submits credentials after login or registration and sends user to seat selection
	$("#submitCredentials").click(function() {
		$(".login-container").hide();
		$(".search-container").show();
	});

	$(".search-submit").click(function(){
		$(".search-container").hide();
		$(".tix-info-container").show();
		getVenueInfo();
	});

	var optionItem = $("<option>");
	// optionItem.addClass("optionItem");
	for (var i = 1; i <= 10; i++) {
		console.log("hello");
		optionItem.text(i);
		$("select.form-control").append(optionItem);
	};

	// Submit seat info and shows menus
	$("#tix-submit").click(function() {
		$(".tix-info-container").hide();
		$(".menu-container").show();

		// Fill in vendor and menu item information
		getMenus();
	});

	// Checkout and send payment
	$("#checkout").click(function() {
		$(".menu-container").hide();
		$("#checkout-modal").show();
	});
});

// Google autocomplete search that pulls information for the location that is chosen by the user. We will use the longitude and lattitude to locate the venue.
var placeSearch, autocomplete;
var componentForm = {
	street_number: "short_name",
	route: "long_name",
	locality: "long_name",
	administrative_area_level_1: "short_name",
	country: "long_name",
	postal_code: "short_name"
};
// console.log(autocomplete);

function initAutocomplete() {
	// Create the autocomplete object, restricting the search to geographical
	// location types.
	autocomplete = new google.maps.places.Autocomplete(
		/** @type {!HTMLInputElement} */
		(document.getElementById("example-search-input")), {
			types: ["geocode"]
		});

	// When the user selects an address from the dropdown, populate the address
	// fields in the form.
	autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
	// Get the place details from the autocomplete object.
	var place = autocomplete.getPlace();

	console.log((place.geometry.viewport.b.f + place.geometry.viewport.b.b)/2);
	console.log((place.geometry.viewport.b.f + place.geometry.viewport.b.b)/2);
}

// Bias the autocomplete object to the user"s geographical location,
// as supplied by the browser"s "navigator.geolocation"" object.
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
