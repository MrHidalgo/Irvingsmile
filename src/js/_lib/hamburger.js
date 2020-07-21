

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
const initHamburger = () => {

  const btn = document.querySelector("[hamburger-js]"),
    hideScrollContainer = document.querySelectorAll("html, body"),
    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
	 */
	if(btn) {
		btn.addEventListener("click", (ev) => {
			const elem = ev.currentTarget;

			elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			if($(btn).hasClass('is-active')) {
				// some action
			} else {
				$(mobileContainer).addClass('is-animated');

				setTimeout(() => {
					$(mobileContainer).removeClass('is-animated');
				}, 400);
			}
		});
	}

};
