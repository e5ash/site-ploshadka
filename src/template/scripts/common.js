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
});
