/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const initDatePicker = () => {
		flatpickr('#book-datepicker', {
			dateFormat: "m/d/Y",
		});
	};

	const dropdown = () => {
		$('[dropdown-toggle-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elParent = el.closest('[dropdown-parent-js]'),
				elDrop = elParent.find('[dropdown-block-js]');

			elDrop.slideToggle(350).css({display:'flex'});
		});

		$('[dropdown-link-js]').on('click', (ev) => {
			const el = $(ev.currentTarget),
				elVal = el.attr('data-val'),
				elParent = el.closest('[dropdown-parent-js]'),
				elDrop = elParent.find('[dropdown-block-js]');

			$('[dropdown-toggle-js] span').html(elVal);

			elDrop.slideToggle(350).css({display:'flex'});
		});
	};


	const headerNavLinkWrapper = () => {
		$('[header-nav-wr-js]').hover(
			(ev) => {
				$(ev.currentTarget).addClass('is-hover').stop(true, true);
			},
			(ev) => {
				$(ev.currentTarget).removeClass('is-hover').stop(true, true);
			}
		);
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initSwiper();
		// ==========================================

		// callback
		initDatePicker();
		dropdown();
		headerNavLinkWrapper();
		// ==========================================
	};
	initNative();
})();
