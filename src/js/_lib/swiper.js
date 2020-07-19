

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
      delay: 7500
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
      delay: 7500
    },
		speed: 1000,
    slidesPerView: 4,
    spaceBetween: 20,
  });
};
