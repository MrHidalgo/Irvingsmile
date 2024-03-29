

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const mainSwiper = new Swiper('.mainSwiper', {
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
    },
  });

  const servicesSwiper = new Swiper('.servicesSwiper', {
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
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		}
  });

	const promotionsSwiper = new Swiper('.promotionsSwiper', {
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
				spaceBetween: 20,
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		}
	});

	const partnersSwiper = new Swiper('.partnersSwiper', {
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
				spaceBetween: 20,
			},
		}
	});
};
