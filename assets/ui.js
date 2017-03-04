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