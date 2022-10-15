$(document).ready(randomFlag());

$(document).ready(function(){
  $('#new-flag-button').click(function(){
    randomFlag();
  });
});

function randomFlag(){
  var name;
  var link;
  var num = Math.floor((Math.random() * 196) + 0);
  console.log("Data: ");
  // false FOR LOCAL TESTS | true FOR LIVE BUILD
  if(true){
    $.getJSON("../scripts/country_flags.json", function(data) {
      // console.log(data.length);
      name = data[num].Country;
      link = data[num].ImageURL;
      console.log(name);
      console.log(link);
      $("#flag-name").html(name);
      $("#flag-image").attr("src", link);
    });
  }
  else{
    $.getJSON("https://barrettosmundson.com/scripts/country_flags.json", function(data) {
      // console.log(data.length);
      name = data[num].Country;
      link = data[num].ImageURL;
      console.log(name);
      console.log(link);
      $("#flagName").html(name);
      $("#flagImage").attr("src", link);
    });
  }
}

function setFlag(num){
  // false FOR LOCAL TESTS | true FOR LIVE BUILD
  if(true){
    $.getJSON("../scripts/country_flags.json", function(data) {
      // console.log(data.length);
      name = data[num].Country;
      link = data[num].ImageURL;
      console.log(name);
      console.log(link);
      $("#flag-name").html(name);
      $("#flag-image").attr("src", link);
    });
  }
  else{
    $.getJSON("https://barrettosmundson.com/scripts/country_flags.json", function(data) {
      // console.log(data.length);
      name = data[num].Country;
      link = data[num].ImageURL;
      console.log(name);
      console.log(link);
      $("#flagName").html(name);
      $("#flagImage").attr("src", link);
    });
  }
}

function testFlags(num){
  $.getJSON("../scripts/country_flags.json", function(data) {
    for(let i = 0; i < 222; i++){
      setTimeout(function () {
        setFlag(i);
        // console.log(i);
      }, i* 250);
    }
  });
}
