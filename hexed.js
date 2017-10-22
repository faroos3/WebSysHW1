(function ( $ ) {
	$.fn.hexed = function() {
		html = "<div id='hexedBlock'>";
		html += "<p>Heres some more text</p>";
		html += "<h1>Heres a h1 text</h1>";
		html += "</div>";
		this.append(html);
	};
}( jQuery ));




$(document).ready(function() {
	$( "p" ).hexed();
});

