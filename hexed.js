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
      return false;
    });
  };
}(jQuery));

$(document).ready(function() {
  $("#timer").function(){
    var begin_t = new Date().getTime(); 
    
  }; 
  $("#hexed").hexed();
});
