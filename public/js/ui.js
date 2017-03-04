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
    });
}

function getVendors() {
    var query = "/api/getvendors/" + selectedVenue;
    $.get(query, function(data) {
        vendorInfo = data;
    })
}

$(document).ready(function(){
	$("#login").click(function(){
		$(".welcome-container").hide();
		$(".login-container").show();
	});

	$("#signup").click(function(){
		$(".welcome-container").hide();
		$(".regform-container").show();
	});

	$(".submit").click(function(){
		$(".regform-container").hide();
		$(".login-container").hide();
		$(".tix-info-container").show();
	});

	$("#tix-submit").click(function(){
		$(".tix-info-container").hide();
		$(".menu-container").show();
	});

	$("#checkout").click(function(){
		$(".tix-info-container").hide();
		$(".menu-container").hide()
		$("#checkout-modal").show();
	});
});