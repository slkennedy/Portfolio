console.log('If you like what you see in my portfolio, contact me at slkennedy@gmail.com');

//Menu scroll script
$('#about-link').click(function() {
	$('html, body').animate ({ scrollTop:0}, 200);
	return false;
});

$('#skills-link').click(function() {
	$('html, body').animate ({ scrollTop:370}, 200);
	return false;
});

$('#works-link').click(function() {
	$('html, body').animate ({ scrollTop:660}, 200);
	return false;
});

$('#contact-link').click(function() {
	$('html, body').animate ({ scrollTop:1885}, 200);
	return false;
});