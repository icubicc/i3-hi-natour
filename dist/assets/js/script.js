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

	//Update 19.02.19 (replace yang lama)
	$('.js-destination-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		pageDots: false,
		draggable: false,
		//prevNextButtons: false,
	});

	//Update 19.02.19
	$('.js-destination-inner-slider').flickity({
		imagesLoaded: true,
		wrapAround: false,
		prevNextButtons: false,
		groupCells: true,
		contain: true,
	});

	$('.js-promotion-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		//prevNextButtons: false,
	});

	$('.accommodation-detail-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		pageDots: false
	});

	$('.reviews-list').flickity({
		imagesLoaded: true,
		wrapAround: false,
		groupCells: true,
		contain: true,
		pageDots: false
	});

	$('.news-slider').find('.slides').flickity({
		autoPlay: 5000,
		imagesLoaded: true,
		wrapAround: true,
		prevNextButtons: false,
	});

	$('.responsibility-slider').find('.slides').flickity({
		autoPlay: 5000,
		imagesLoaded: true,
		wrapAround: true,
		prevNextButtons: false,
	});

	$('.director-slider').find('.slides').flickity({
		imagesLoaded: true,
		groupCells: true,
		contain: true,
		pageDots: false
	});

	var companySlider = $('.company-profile-slider').find('.slides').flickity({
		imagesLoaded: true,
		wrapAround: false,
		prevNextButtons: true,
		pageDots: false
	});

	if($('.company-profile-slider').length > 0) {
		companySliderData = companySlider.data('flickity');

		function companySliderStatus() {
			var slideStatus = $('.slider-nav .slider-nav-item');
			var currentSlider = companySliderData.selectedIndex;

			slideStatus.removeClass('is-current');
			slideStatus.eq(currentSlider).addClass('is-current');
		}
		companySliderStatus();
		companySlider.on( 'select.flickity', companySliderStatus );
	}

	$('.faq-item .question .toggle').on('click', function() {
		var $parent = $(this).parents('.faq-item');
		var $answer = $($parent).find('.answer');

		if($parent.hasClass('is-toggled')) {
			$parent.removeClass('is-toggled');
			$answer.slideUp(200);
		}
		else {
			$parent.addClass('is-toggled');
			$answer.slideDown(200);
		}
	});

	$('.hotel-development-item .title .toggle').on('click', function() {
		var $parent = $(this).parents('.hotel-development-item');
		var $desc = $($parent).find('.desc');

		if($parent.hasClass('is-toggled')) {
			$parent.removeClass('is-toggled');
			$desc.slideUp(200);
		}
		else {
			$parent.addClass('is-toggled');
			$desc.slideDown(200);
		}
	});

	$('.mobile-menu-toggle').on('click', function() {
		$('.mobile-menu').addClass('is-toggled');
	});

	$('.mobile-menu-background').on('click', function() {
		$('.mobile-menu').removeClass('is-toggled');
	});

	$('.menu-toggle').on('click', function() {
		var $parent = $(this).parents('.item');
		var menuChild = $parent.find('.menu-child');

		if($parent.hasClass('is-toggled')) {
			$parent.removeClass('is-toggled');
			menuChild.slideUp(200);
		}
		else {
			$parent.addClass('is-toggled');
			menuChild.slideDown(200);
		}

		return false;
	});

	// $('iframe').load(function () {
	// 	$('iframe').height($('iframe').contents().height());
	// });

	// Tommy 11.03.19
	$('.js-gallery-slider').find('.slides').flickity({
		imagesLoaded: true,
	});
	$('.js-room-gallery-slider').find('.slides').flickity({
		imagesLoaded: true,
	});
	// End Tommy 11.03.19

});
