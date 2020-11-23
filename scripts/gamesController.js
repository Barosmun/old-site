function hideExecutables(){
  var games = $(".game");
  for(var i = 0; i < games.length; i++){
    if(!$(games[i]).hasClass("online")){
      $(games[i]).hide();
      $(games[i]).next().hide();
      $(games[i]).next().next().hide();
    }
  }
}

function showAll(){
  $(".game").show();
  $(".game").next().show();
  $(".game").next().next().show();
}
