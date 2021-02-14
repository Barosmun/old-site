$(document).ready(function() {
	var bigImage = document.createElement("img");

	bigImage.onload = function() {
		$(".image-container").css("background-image", "url(../images/home_image.png");
	}

	setTimeout(function(){
		bigImage.src = "../images/home_image.png";
	}, 5);
});