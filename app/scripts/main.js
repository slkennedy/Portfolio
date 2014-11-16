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
	$('html, body').animate ({ scrollTop:653}, 200);
	return false;
});

$('#contact-link').click(function() {
	$('html, body').animate ({ scrollTop:1878}, 200);
	return false;
});

//logo appearance
// $(window).scroll(function (){
// 	var scrollTop = $(window).scrollTop();
// 	if (scrollTop >= $('.about').offset().top) {
// 		$('.logo-name')
// 	}
// })