function marked(square, classes){
	//Player move
	var buttons = $(".ttt");
	if(buttons.length % 2 == 1){
	  $("#"+square).replaceWith(`<b class="x `+classes+`">&nbsp;X&nbsp;</b>`);
	}
	else{
	  $("#"+square).replaceWith(`<b class="o `+classes+`">&nbsp;O&nbsp;</b>`);
	}
  
	//Check for winner
	if($(".x.Top").length === 3 || $(".x.Middle").length === 3 || $(".x.Bottom").length === 3 ||
	  $(".x.Left").length === 3 || $(".x.Center").length === 3 || $(".x.Right").length === 3 ||
	  (
		($(".x.Middle.Center").length === 1 && ( ($(".x.Top.Left").length === 1 && $(".x.Bottom.Right").length === 1)
		|| ($(".x.Top.Right").length === 1 && $(".x.Bottom.Left").length === 1)) )
	  )) {
	  $("#tictactitle").replaceWith(`<h3 id="tictactitle"> You win! </h3>`);
	  $(".ttt").replaceWith("<b>&nbsp;&nbsp;&nbsp;");
	  updateScore(1,0);
	}
	else if($(".o.Top").length === 3 || $(".o.Middle").length === 3 || $(".o.Bottom").length === 3 ||
	  $(".o.Left").length === 3 || $(".o.Center").length === 3 || $(".o.Right").length === 3 ||(
		($(".o.Middle.Center").length === 1 && ( ($(".o.Top.Left").length === 1 && $(".o.Bottom.Right").length === 1)
		|| ($(".o.Top.Right").length === 1 && $(".o.Bottom.Left").length === 1)) )
	  )) {
	  $("#tictactitle").replaceWith(`<h3 id="tictactitle"> AI wins! </h3>`);
	  $(".ttt").replaceWith("<b>&nbsp;&nbsp;&nbsp;");
	  updateScore(0,1);
	}
	else if(buttons.length < 2){
	  $("#tictactitle").replaceWith(`<h3 id="tictactitle"> Cat's Game - No winner </h3>`);
	  $(".ttt").replaceWith("<b>&nbsp;&nbsp;&nbsp;");
	}
  
	buttons = $(".ttt");
	//AI move
	if(buttons.length % 2 == 0){
	  $(buttons[Math.floor(Math.random()*buttons.length)]).click();
	}
  
  }
  
  function resetGame(){
	  $("#tictactitle").replaceWith(`<h3 id="tictactitle"> Play some Tic-Tac-Toe? </h3>`);
	  $("#tictactable").replaceWith(`
	  <div id="tictactable">
		<div><button class="ttt" id="TL" onclick="marked(this.id, 'Top Left');">&nbsp;</button></div>
		<div><button class="ttt" id="TM" onclick="marked(this.id, 'Top Middle');">&nbsp;</button></div>
		<div><button class="ttt" id="TR" onclick="marked(this.id, 'Top Right');">&nbsp;</button></div>
		<div><button class="ttt" id="CL" onclick="marked(this.id, 'Center Left');">&nbsp;</button></div>
		<div><button class="ttt" id="CM" onclick="marked(this.id, 'Center Middle');">&nbsp;</button></div>
		<div><button class="ttt" id="CR" onclick="marked(this.id, 'Center Right');">&nbsp;</button></div>
		<div><button class="ttt" id="BL" onclick="marked(this.id, 'Bottom Left');">&nbsp;</button></div>
		<div><button class="ttt" id="BM" onclick="marked(this.id, 'Bottom Middle');">&nbsp;</button></div>
		<div><button class="ttt" id="BR" onclick="marked(this.id, 'Bottom Right');">&nbsp;</button></div>
	</div>
	`);
  }
  
  function resetScore(){
	  $("#scoreboard").replaceWith(`
		<table id="scoreboard">
		  <tr>
			<th colspan="2"> Scoreboard </th>
		  </tr>
		  <tr>
			<td>Player<br><b id="playerScore">0</b></td>
			<td>AI<br><b id="aiScore">0</b></td>
		  </tr>
		</table>
		`);
  }
  
  function updateScore(player, ai){
	var pS = parseInt($("#playerScore").text());
	var aS = parseInt($("#aiScore").text());
	if(pS >= 99 || aS >= 99){
	  pS = 0;
	  aS = 0;
	  alert("Either someone knows how to use console commands or you need to take a break...");
	}
	pS += player;
	aS += ai;
	$("#playerScore").text(pS);
	$("#aiScore").text(aS);
  }
  