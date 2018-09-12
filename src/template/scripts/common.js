$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var panel = $('.panel'),
			panelClass = 'panel_fixed';

	$(window).on('load resize scroll', function(event) {
		var windowScroll = $(window).scrollTop();

		if (windowScroll >= 96) {
			panel.addClass(panelClass);
		} else{
			panel.removeClass(panelClass);
		}
	});

	// sliders

	$('.teach__list').slick({
		fade: true
	});

	$('.with__list').slick({
		fade: true
	})


	$('.shares__btn').click(function(event) {
		var sharesItem = $(this).parents('.shares__item'),
				countArrea = sharesItem.find('.shares__count'),
				countDesc = sharesItem.find('.shares__desc'),
				countClick = Number(sharesItem.attr('data-count-click'));
		

		countArrea.addClass('shares__count_show')

		setTimeout(function() {
			countArrea.removeClass('shares__count_show');
		}, 500);
		

		if (countClick < 2) {
			window.open(sharesItem.attr('data-target-page'));
		} else{
			countClick--;
			countArrea.html(countClick);
			countDesc.each(function(index, elem) {
				var count = Number($(this).attr('data-count-show'));
				if (count == countClick) {
					countDesc.removeClass('shares__desc_show');
					$(this).addClass('shares__desc_show');
				}
			});
			setTimeout(function() {
				countDesc.removeClass('shares__desc_show');
			}, 2000);
			
		}

		sharesItem.attr('data-count-click', countClick);
	});


	var tableAnimation = $('.table:nth-of-type(1)'),
			tableStatic = $('.table:nth-of-type(2)'),
			linkTableAnimation = $('.schedule__link b'),
			linkTableStatic = $('.schedule__link u');

	tableStatic.hide();


	function checkLink() {
		if (tableAnimation.is(':visible')) {
			linkTableStatic.show();
			linkTableAnimation.hide();
		} else{
			linkTableStatic.hide();
			linkTableAnimation.show();
		}
	}
	
	checkLink();

	linkTableStatic.click(function() {
		tableAnimation.hide();
		tableStatic.show();
		checkLink();
	});

	linkTableAnimation.click(function() {
		tableAnimation.show();
		tableStatic.hide();
		checkLink();
	});


	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top - 70 +"px"}, 1500);
		return false;
	});


	// slider
	$slick_slider1 = $('.pride__list');
	$slick_slider2 = $('.about__images');
	settings_slider = {
		dots: false,
		// more settings
	}
	slick_on_mobile( $slick_slider1, settings_slider);
	slick_on_mobile( $slick_slider2, settings_slider);

	// slick on mobile
		function slick_on_mobile(slider, settings){
			$(window).on('load resize', function() {
				if ($(window).width() > 767) {
					if (slider.hasClass('slick-initialized')) {
						slider.slick('unslick');
					}
					return
				}
				if (!slider.hasClass('slick-initialized')) {
					return slider.slick(settings);
				}
			});
	};

	$('.table__group-name').click(function(event) {
		var list = $(this).next('.table__group-list');
		list.slideToggle(300);
	});


	var mobileBtn = $('.mobile-btn'),
			nav = $('.panel__nav');

	mobileBtn.click(function(event) {
		$(this).toggleClass('mobile-btn_toggle');
		nav.toggleClass('panel__nav_toggle');
	});

});
