(function($) {
  $.fn.hexed = function(settings) {
    gameHTML = "front end guys will make this";
    startTime = Date.now();
    var R = Math.floor((Math.random() * 256));
    var G = Math.floor((Math.random() * 256));
    var B = Math.floor((Math.random() * 256));

    // this.append(gameHTML+" R: "+R.toString(16)+" G: "+G.toString(16)+" B: "+B.toString(16));
    $("#colorBlock").css("background-color","#"+R.toString(16)+G.toString(16)+B.toString(16));

    $("#user_input").submit( function() {
      var ansR = parseInt($('#red-input').val(), 16);
      var ansG = parseInt($('#green-input').val(), 16);
      var ansB = parseInt($('#blue-input').val(), 16);
      // score the user
      var err = (Math.abs(R-ansR)+Math.abs(G-ansG)+Math.abs(B-ansB))*100/255/3; // error of user's guess
      var endTime = Date.now();
      var val = ((15000- (endTime-startTime))*(15-settings.diff-err)/(15-settings.diff)).toFixed(2);
      if(val < 0) {
        val = 0;
      }
      $("#score").text("Score: " + val);
      //this.append((15000 - (endTime-startTime))+' x '+(15-settings.diff-err)+' / '+(15-settings.diff));

      // note: assuming #score is an actual element and that startTime is defined
      return false;
    });
  };
}(jQuery));
$(document).ready(function() {
	$("#hexed").hexed({
    diff: parseInt($("#diff").val()),
    turns: parseInt($("#rounds").val())
  });
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