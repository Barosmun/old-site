$(document).ready(function(){
  var name;
  var link;
  var num = Math.floor((Math.random() * 194) + 0);
  console.log("data: ");
  $.getJSON("https://barrettosmundson.com/scripts/country_flags.json", function(data) {
    name = data[num].Country;
    link = data[num].ImageURL;
    console.log(name);
    console.log(link);
    $("#flagName").html(name);
    $("#flagImage").attr("src", link);
  });

});
