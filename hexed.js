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
      $("#score").text(((15000-Date.now()-startTime)*(15-diff-err)/(15-diff)).toFixed(2));
      // note: assuming #score is an actual element and that startTime is defined
      return false;
    });
  };
}(jQuery));

$(document).ready(function() {
  $("#timer").function(){
    var startTime = new Date().getTime(); 
    
  }; 
  $("#hexed").hexed();
});
