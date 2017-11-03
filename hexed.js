(function($) {
  $.fn.hexed = function() {
    gameHTML = "front end guys will make this";
    var R = Math.floor((Math.random() * 255) + 0);
    var G = Math.floor((Math.random() * 255) + 0);
    var B = Math.floor((Math.random() * 255) + 0);

    this.append(gameHTML+"R: "+R.toString()+" G: "+G.toString()+" B "+B.toString());
    

    $("#user_input").submit( function() {
      var ansR = $('input[id="R"]').val();
      var ansG = $('input[id="G"]').val();
      var ansB = $('input[id="B"]').val();
      // score the user
      var diff = document.getElementById("diff"); // difficulty
      var err = (abs(R-ansR)+abs(G-ansG)+abs(B-absB))*100/255/3; // error of user's guess
      $("#score").text(((15000- new Date().now()-startTime)*(15-diff-err)/(15-diff)).toFixed(2));
      // note: assuming #score is an actual element and that startTime is defined
      return false;
    });
  };
}(jQuery));
var startTime = new Date().getTime(); 
$(document).ready(function() {
	$("#hexed").hexed();
});

//in the submit button, make sure the seconds_int = 0 and the minutes_int = 0
/* //this should work, take it out of the html once this is ok to be there too. 
var seconds_int = 0; 
		var minutes_int = 0;
		var myInterval = setInterval(for_seconds, 1000); 
		function for_seconds(){
		seconds_int += 1; 
		
		document.getElementById("seconds").innerHTML = seconds_int + " s";
		if (seconds_int%60 == 0){
			minutes_int += 1;
			document.getElementById("minutes").innerHTML = minutes_int + " m";
		}
		}

*/