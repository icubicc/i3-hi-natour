/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery */

// initialize when document is ready
jQuery(document).ready(function($) {

	// initialize magnificPopup
	$('.js-popup-link').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		removalDelay: 200
	});

	$('.site-header-nav .item a').hover(function() {
		var $currentToggled = '#' + $('.mega-menu-item.is-toggled').attr('id');

		if($(this).hasClass('mega-menu-toggle')) {
			var $menutarget = $(this).data('menu-target');
			
			if($menutarget != $currentToggled) {
				$($currentToggled).removeClass('is-toggled');
				$($currentToggled).slideUp(200);
			}

			$($menutarget).addClass('is-toggled');
			$($menutarget).slideDown(200);
		}
		else {
			$($currentToggled).removeClass('is-toggled');
			$($currentToggled).slideUp(200);
		}
	});

	$('.site-header-container').hover(function() {

	}, function() {
		$('.mega-menu-item').removeClass('is-toggled');
		$('.mega-menu-item').slideUp(200);
	});

	$('.featured-hotel-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		pageDots: false
	});

});
