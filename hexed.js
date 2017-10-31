(function($) {
	$.fn.hexed = function() {
		gameHTML = "front end guys will make this";
		this.append(gameHTML);
	};
}(jQuery));

$(document).ready(function() {
	$("#hexed").hexed();
});
