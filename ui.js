$(document).ready(function() {
    $('#enter-chat').submit(function(e){
    	e.preventDefault();
    	// $(".chat-name").hide(400);
    	// $(".chat-name").css('left', '-200px');
    	$(".chat-name").animate({ "left": "-200px" }, "slow" );
    	$("#select-class").animate({ "left": "50%" }, "slow" );
    	//$(".chat").slideDown();
	});

	 $('#select-class').change(function(e){
    	e.preventDefault();
    	$("#select-class").hide();
    	$(".chat").show(600);
    	$("#chat-header").text($("#select-class option:selected").text());
	});
});