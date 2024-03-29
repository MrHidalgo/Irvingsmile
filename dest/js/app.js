"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			if ($(btn).hasClass('is-active')) {
				// some action
			} else {
				$(mobileContainer).addClass('is-animated');

				setTimeout(function () {
					$(mobileContainer).removeClass('is-animated');
				}, 400);
			}
		});
	}
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

	var countScroll = $(window).scrollTop(),
	    headerElement = $('.header');

	if (countScroll > 10) {
		headerElement.addClass("header--fixed");
	} else {
		headerElement.removeClass("header--fixed");
	}
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

	svg4everybody();
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

	var mainSwiper = new Swiper('.mainSwiper', {
		loop: true,
		grabCursor: true,
		freeMode: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 7500,
			disableOnInteraction: false
		},
		speed: 1000,
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	});

	var servicesSwiper = new Swiper('.servicesSwiper', {
		loop: true,
		grabCursor: true,
		freeMode: false,
		effect: 'slide',
		autoplay: {
			delay: 7250,
			disableOnInteraction: false
		},
		speed: 1000,
		slidesPerView: 4,
		spaceBetween: 20,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});

	var promotionsSwiper = new Swiper('.promotionsSwiper', {
		loop: true,
		grabCursor: true,
		freeMode: false,
		effect: 'slide',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 7350,
			disableOnInteraction: false
		},
		speed: 1000,
		slidesPerView: 3,
		spaceBetween: 40,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 40
			}
		}
	});

	var partnersSwiper = new Swiper('.partnersSwiper', {
		loop: true,
		grabCursor: true,
		freeMode: false,
		effect: 'slide',
		autoplay: {
			delay: 7300,
			disableOnInteraction: false
		},
		speed: 1000,
		slidesPerView: 4,
		spaceBetween: 20,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	});
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

	/**
   * @description
  */
	WebFont.load({
		google: {
			families: ['Roboto:100,300,400,500,700,900']
		}
	});

	/**
   * @description
  */
	// const WebFontConfig = {
	//   custom: {
	//     families: [
	//       'Lato:n1,n3,n4,n5,n6,n7,n9'
	//     ]
	//   }
	// };
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {
	initHeaderFixed();
});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {
	initHeaderFixed();
});

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var initDatePicker = function initDatePicker() {
		$.each($('.book-datepicker'), function (idx, val) {
			new Pikaday({
				field: $(val)[0],
				format: 'DD/MM/YYYY'
			});
		});
	};

	var dropdown = function dropdown() {
		$('[dropdown-toggle-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elParent = el.closest('[dropdown-parent-js]'),
			    elDrop = elParent.find('[dropdown-block-js]');

			elDrop.slideToggle(350).css({ display: 'flex' });
		});

		$('[dropdown-link-js]').on('click', function (ev) {
			var el = $(ev.currentTarget),
			    elVal = el.attr('data-val'),
			    elParent = el.closest('[dropdown-parent-js]'),
			    elDrop = elParent.find('[dropdown-block-js]');

			$('[dropdown-toggle-js] span').html(elVal);

			elDrop.slideToggle(350).css({ display: 'flex' });
		});
	};

	var headerNavLinkWrapper = function headerNavLinkWrapper() {
		// $('[header-nav-wr-js]').hover(
		// 	(ev) => {
		// 		if($(window).width() > 1279) {
		// 			$(ev.currentTarget).addClass('is-hover').stop(true, true);
		// 		}
		// 	},
		// 	(ev) => {
		// 		if($(window).width() > 1279) {
		// 			$(ev.currentTarget).removeClass('is-hover').stop(true, true);
		// 		}
		// 	}
		// );

		// $('[header-nav-wr-js]').on('click', (ev) => {
		// 	if($(window).width() < 1280) {
		// 		if($(ev.currentTarget).find('.header__nav-link-drop').is(':visible')) {
		// 			$(ev.currentTarget).find('.header__nav-link-drop').slideUp(350);
		// 		} else {
		// 			$('[header-nav-wr-js] .header__nav-link-drop').slideUp(350);
		// 			$(ev.currentTarget).find('.header__nav-link-drop').slideDown(350);
		// 		}
		// 	} else {
		// 		if($(ev.currentTarget).hasClass('is-hover')) {
		// 			$(ev.currentTarget).removeClass('is-hover');
		// 		} else {
		// 			$('[header-nav-wr-js]').removeClass('is-hover');
		// 			$(ev.currentTarget).addClass('is-hover');
		// 		}
		// 	}
		// });

		$('[header-nav-wr-js]').hover(function (ev) {
			if ($(window).width() > 1279) {
				$(ev.currentTarget).addClass('is-hover').stop(true, true);
			}
		}, function (ev) {
			if ($(window).width() > 1279) {
				$(ev.currentTarget).removeClass('is-hover').stop(true, true);
			}
		});

		$('[header-nav-wr-js] .header__nav-link span').on('click', function (ev) {
			var el = $(ev.currentTarget).closest('[header-nav-wr-js]');

			if (el.find('.header__nav-link-drop').is(':visible')) {
				el.find('.header__nav-link-drop').slideUp(400);
			} else {
				$('[header-nav-wr-js] .header__nav-link-drop').slideUp(400);
				el.find('.header__nav-link-drop').slideDown(400);
			}

			ev.preventDefault();
			return false;
		});

		$(window).on('resize', function (ev) {
			if ($('[header-nav-wr-js]').hasClass('is-hover')) {
				$('[header-nav-wr-js]').removeClass('is-hover');
			}
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		initHamburger();
		// ==========================================

		// callback
		initDatePicker();
		dropdown();
		headerNavLinkWrapper();
		// ==========================================
	};
	initNative();
})();