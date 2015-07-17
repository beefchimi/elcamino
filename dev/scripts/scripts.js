document.addEventListener('DOMContentLoaded', function() {


	// Global Variables
	// ----------------------------------------------------------------------------
	var elHTML       = document.documentElement,
		elBody       = document.body;

	// window measurement variables
	var numScrollPos      = window.pageYOffset,
		numWinWidth       = window.innerWidth,
		numClientWidth    = document.documentElement.clientWidth,
		numScrollbarWidth = numWinWidth - numClientWidth,
		hasScrollbar      = numScrollbarWidth > 0 ? true : false;


	// Helper: Lock / Unlock Body Scrolling
	// ----------------------------------------------------------------------------
	function lockBody() {

		// enable overflow-y: hidden on <body>
		elHTML.setAttribute('data-overflow', 'locked');

		// if necessary, accomodate for scrollbar width
		if (hasScrollbar) {
			elBody.style.paddingRight = numScrollbarWidth + 'px';
		}

	}

	function unlockBody() {

		// disable overflow-y: hidden on <body>
		elHTML.setAttribute('data-overflow', 'scrollable');

		// if necessary, remove scrollbar width styles
		// should be expanded to restore original padding if needed
		if (hasScrollbar) {
			elBody.style.paddingRight = '0px';
		}

	}


/*
	// secretMail: Add mailto link to home section
	// ----------------------------------------------------------------------------
	function secretMail() {

		var mailLink = document.getElementById('contact'),
			prefix    = 'mailto',
			local    = 'curtis',
			domain   = 'dulmage',
			suffix    = 'me';

		mailLink.setAttribute('href', prefix + ':' + local + '@' + domain + '.' + suffix);

	}
*/


	// onPageLoad: Main Function To Fire on Window Load
	// ----------------------------------------------------------------------------
	function onPageLoad() {

		// finalAnimate();

	}


/*
	// finalAnimate: Inform the document when we have finished our loading animations
	// ----------------------------------------------------------------------------
	function finalAnimate() {

		var elFooter = document.getElementsByTagName('footer')[0];

		elFooter.addEventListener(animationEvent, applyReadyState);

		function applyReadyState() {

			classie.add(elHTML, 'ready');
			elFooter.removeEventListener(animationEvent, applyReadyState);

		}

	}
*/


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
	// onPageLoad();


}, false);