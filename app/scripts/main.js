(function (){

'use strict';

	console.log('If you like what you see in my portfolio, contact me at slkennedy@gmail.com');

	//Menu scroll script
	$('#about-link').click(function() {
		$('html, body').animate ({ scrollTop:0}, 350);
		return false;
	});

	$('#skills-link').click(function() {
		$('html, body').animate ({ scrollTop:370}, 350);
		return false;
	});

	$('#works-link').click(function() {
		$('html, body').animate ({ scrollTop:653}, 350);
		return false;
	});

	$('#contact-link').click(function() {
		$('html, body').animate ({ scrollTop:1878}, 350);
		return false;
	});

})();
