!function(){"use strict";console.log("If you like what you see in my portfolio, contact me at slkennedy@gmail.com");var o=$(".about").height();console.log(o);var l=$(".skills").height()+o;console.log("skillsheight",l);var t=$(".work").height()+l;console.log("workheight",t),$("#about-link").click(function(){return $("html, body").animate({scrollTop:0},350),!1}),$("#skills-link").click(function(){return $("html, body").animate({scrollTop:o},350),!1}),$("#works-link").click(function(){return $("html, body").animate({scrollTop:l},350),!1}),$("#contact-link").click(function(){return $("html, body").animate({scrollTop:t},350),!1})}();