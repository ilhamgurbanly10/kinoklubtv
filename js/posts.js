
// small-slider

flashSlider('.small-slider', {
	gap: 10,
	slideToShow: 2,
	width: "100%",
	slideToScrollAbsolutely: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 3,

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 4,

			}
		},
		{
			breakpoint: 992,
			settings: {
				gap: 17,
				slideToShow: 5,
			}
		}
	]
});

// the-end-of-small-slider



// small-slider

flashSlider('.big-slider', {
	gap: 10,
	slideToShow: 3,
	width: "100%",
	slideToScrollAbsolutely: true,
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slideToShow: 4,

			}
		},
		{
			breakpoint: 768,
			settings: {
				slideToShow: 5,

			}
		},
		{
			breakpoint: 992,
			settings: {
				slideToShow: 6,
			}
		}
	]
});

// the-end-of-small-slider