(function($) {
  var seconds_int = 0; 
  var minutes_int = 0;
  var current_round = 1; 
  var myInterval = null; 
  var clicked = true;
  var score = 0;
  var turns = 1;
  // var babby = true;
  $.fn.hexed = function(settings) {
    gameHTML = '<div id="theGame" class="ui-widget-content">';
    gameHTML += '<div id="colorBlock"></div>';
    gameHTML += '<form id="user_input">';
    gameHTML += '<div id="red"></div>';
    gameHTML += '<input id="red-input" value="7f" pattern="[a-fA-F0-9]{2}"/>';
    gameHTML += '<div id="green"></div>';
    gameHTML += '<input id="green-input" value="7f" pattern="[a-fA-F0-9]{2}"/>';
    gameHTML += '<div id="blue"></div>';
    gameHTML += '<input id="blue-input" value="7f" pattern="[a-fA-F0-9]{2}"/>';
    gameHTML += '<input id="checkIt" type="submit" value="Check It!">';
    gameHTML += '</form>';
    gameHTML += '</div>';
    gameHTML += '<div id="result_submit">';
    gameHTML += '<div id="result">';
    gameHTML += '<div id="round">Round ' + turns + ' of ';
    gameHTML += settings.turns;
    gameHTML += '</div>';
    gameHTML += '<div id="score">Score: </div>';
    gameHTML += '</div>';
    gameHTML += '<button><a href="">Restart!</a></button>';
    gameHTML += '</div>';

    $('#gameBlock').html(gameHTML);
    $( function() {
      $("#user_input").submit(function(e) {
          e.preventDefault();
      });

      $( "#red" ).slider({
        orientation: "horizontal",
        max: 255,
        value: 127,
        range: "min",
        slide: function( event, ui) {
          var value = ui.value; 
          var value = value.toString(16);
          if (value.length < 2) { // if the value is less then 2 digits, add a 0 to the front
          $("#red-input").val("0" + value);
        } else {
          $("#red-input").val(value);
        }
        }
      });   

      $( "#green" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: function(event, ui) {
          var value = ui.value;
          var value = value.toString(16);
          if (value.length < 2) {
          $("#green-input").val("0" + value);
        } else {
          $("#green-input").val(value);
        }
        }
      });      

      $( "#blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: function(event, ui) {
          var value = ui.value;
          var value = value.toString(16);
          if (value.length < 2) {
          $("#blue-input").val("0" + value);
        } else {
          $("#blue-input").val(value);
        }
        }
      });  

      $("#red-input").change(function() {//if user changed the input, change the slider
        var value = parseInt (this.value, 16)//convert hex to decimal(RGB)
        console.log(this.value); //debug purpose
        $("#red").slider("value", value);
      });

      $("#green-input").change(function() {
        var value = parseInt (this.value, 16)
        console.log(this.value); 
        $("#green").slider("value", value);
      });

      $("#blue-input").change(function() {
        var value = parseInt (this.value, 16)
        console.log(this.value); 
        $("#blue").slider("value", value);
      });

      } );
    
    //var myInterval = setInterval(for_seconds, 1000); 
    function for_seconds(){
      seconds_int += 1; 
      
      document.getElementById("seconds").innerHTML = seconds_int + " s";

      if (seconds_int%60 == 0){
        minutes_int += 1;
        //document.getElementById("minutes").innerHTML = minutes_int + " m";
      }
    }
    document.getElementById("start").onclick = function(){
      // if (clicked) {
        seconds_int = 0; 
        minutes_int = 0; 
        clearInterval(myInterval);
        document.getElementById("seconds").innerHTML = seconds_int + " s";
        //document.getElementById("minutes").innerHTML = minutes_int + " m";
        myInterval = setInterval(for_seconds, 1000); 
        // clicked = false;
      // }
    }; 

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
      score += val;
      $("#score").text("Score: " + val);
      // if (babby) {
        ++turns;
        // babby = false;
      // }
      // note: assuming #score is an actual element and that startTime is defined
      return false;
    });
  };
}(jQuery));
$(document).ready(function() {
  var d_spinner = $("#diff").spinner(); 
  var r_spinner = $("#round").spinner(); 
	$("#hexed").click(function() {
    $("#gameBlock").hexed({
      diff: parseInt($("#diff").val()),
      turns: parseInt($("#round").val())

    });
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