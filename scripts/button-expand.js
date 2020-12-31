$(document).ready(function(){
    $('.button-expand').click(function(){
		$type = $(this).data('type');
		var exp = $(this).siblings(".expandable");
		if(exp.hasClass("hidden")){
			exp.removeClass("hidden");
		}
		else{
			exp.addClass("hidden");
		}
    });
});