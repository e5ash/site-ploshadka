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
});
