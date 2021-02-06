var url = /#more$/;
$(document).ready( function(){
  if (location.href.match(url)){
    $('#about-me').find("div").removeClass("hidden");
  }
});