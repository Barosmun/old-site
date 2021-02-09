

$(document).ready(function() {
	$("body").removeClass("preload");
	
	var emailActive = document.createElement("img");
	var linkedinActive = document.createElement("img");
	var githubActive = document.createElement("img");
	var hackerrankActive = document.createElement("img");

	emailActive.onload = function(){
		document.removeChild(emailActive)
	}
	linkedinActive.onload = function(){
		document.removeChild(linkedinActive)
	}
	githubActive.onload = function(){
		document.removeChild(githubActive)
	}
	hackerrankActive.onload = function(){
		document.removeChild(hackerrankActive)
	}
	setTimeout(function(){
		emailActive.src = "../images/email_active.svg";
		linkedinActive.src = "../images/linkedin_active.svg";
		githubActive.src = "../images/github_active.svg";
		hackerrankActive.src = "../images/hackerrank_active.svg";

	},50);
  });