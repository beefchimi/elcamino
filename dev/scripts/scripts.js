document.addEventListener('DOMContentLoaded', function() {


	// Global Variables
	// ----------------------------------------------------------------------------
	var elHTML       = document.documentElement,
		elBody       = document.body;


	// secretMail: Add mailto link to home section
	// ----------------------------------------------------------------------------
	function secretMail() {

		var elMailLink = document.getElementById('secret_email'),
			strPrefix   = 'mailto',
			strLocal   = 'inquiries',
			strDomain  = 'eatelcamino',
			strSuffix   = 'com';

		elMailLink.innerHTML = strLocal + '@' + strDomain + '.' + strSuffix;
		elMailLink.setAttribute('href', strPrefix + ':' + strLocal + '@' + strDomain + '.' + strSuffix);

		// classie.add(elBody, 'email_ready');

	}


	// onPageLoad: Main Function To Fire on Window Load
	// ----------------------------------------------------------------------------
	function onPageLoad() {

		secretMail();

		var elContainer = document.getElementById('load_images');

		// layout Isotope after all images have loaded
		imagesLoaded(elContainer, function(instance) {

			classie.add(elBody, 'images_loaded');

		});

	}


/*
	// Window Events
	// ----------------------------------------------------------------------------
	window.addEventListener('resize', function(e) {

		// do not fire resize event for every pixel... wait until finished
		waitForFinalEvent(function() {

			// re-measure window width on resize
			numWinWidth = window.innerWidth;

		}, 500, 'unique string');

	}, false);
*/


	// Initialize Primary Functions
	// ----------------------------------------------------------------------------
	onPageLoad();


}, false);