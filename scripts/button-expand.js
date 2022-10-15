$(document).ready(function(){
	$(".start-open").each(function(i, obj) {
		$(this).css('max-height', obj.scrollHeight);
	});

    $('.button-expand').click(function(){
		$type = $(this).data('type');
		var exp = $(this).siblings(".expandable");
		
		if(exp.attr('style')){
			exp.removeAttr("style")
			$(this).html("&nbsp;Show More&nbsp;")
		}
		else{
			exp.css('max-height', exp[0].scrollHeight);
			$(this).html("&nbsp;Show Less&nbsp;")
		}

    });
});