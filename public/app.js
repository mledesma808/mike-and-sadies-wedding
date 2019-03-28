var $ = require('jquery');

$(document).ready(function() {
	if ($(window).width() >= 992) {
		$('a.nav__item').css('display', 'inline');
	}

	if ($('#HBmenu').css('display', 'inline')) {

	}

	$('#HBmenu').on('click', function(event) {
		event.preventDefault();
	    var navItem = $('a.nav__item');

	    if(navItem.css("display") === "none") {
	        navItem.css("display", "block");
	    } else {
	        navItem.css("display", "none");
	    }
	})

});