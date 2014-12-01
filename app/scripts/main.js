(function (){

'use strict';

	console.log('If you like what you see in my portfolio, contact me at slkennedy@gmail.com');

	//Menu scroll script
	var aboutHeight = $('.about').height();
	console.log(aboutHeight);

	var skillsHeight = ($('.skills').height())+ aboutHeight;
	console.log('skillsheight',skillsHeight);

	var workHeight = ($('.work').height())+skillsHeight;
	console.log('workheight', workHeight);


	$('#about-link').click(function() {
		$('html, body').animate ({ scrollTop:0}, 350);
		return false;
	});

	$('#skills-link').click(function() {
		$('html, body').animate ({ scrollTop: aboutHeight}, 350);
		return false;
	});

	$('#works-link').click(function() {
		$('html, body').animate ({ scrollTop: skillsHeight}, 350);
		return false;
	});

	$('#contact-link').click(function() {
		$('html, body').animate ({ scrollTop:workHeight}, 350);
		return false;
	});

})();
