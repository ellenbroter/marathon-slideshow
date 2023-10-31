/**
 * 	SLIDESHOW
 * */

// 1. get a list of all DOM elements with class "slideshow", in case we have several slideshows in the same page
const slideshows = document.querySelectorAll('.slideshow');

// 2. and for each slideshow of all slideshows...
slideshows.forEach(slideshow => {
	// 3. get all necessary DOM elements inside each slideshow element
	const slides = slideshow.querySelectorAll('.slideshow__slide');
	const previousButton = slideshow.querySelector('.slideshow__previous-button');
	const nextButton = slideshow.querySelector('.slideshow__next-button');
	const dotButtons = slideshow.querySelectorAll('.slideshow__dot-button');

	// 4. define a variable for keeping track of the current position
	let currentSlideIndex = 0;

	// 4.1. and a variable to store the last index position
	const lastSlideIndex = slides.length - 1;

	// 5. define a function that increments the index position
	const goToNextSlide = () => {
		if (currentSlideIndex === lastSlideIndex) {
			currentSlideIndex = 0;
		} else {
			currentSlideIndex += 1;
		}
	};

	// 5. define a function that decrements the index position
	const goToPreviousSlide = () => {
		if (currentSlideIndex === 0) {
			currentSlideIndex = lastSlideIndex;
		} else {
			currentSlideIndex -= 1;
		}
	};

	// 6. define a function that sets the index position to a specific value
	const goToSingleSlide = new_slide_index => {
		currentSlideIndex = new_slide_index;
	};

	// 7. define a function that updates the slides/buttons based on the current index position
	const renderSlideshow = () => {
		slides.forEach((slide, slideIndex) => {
			if (slideIndex === currentSlideIndex) {
				slide.classList.add('slideshow__slide--visible');
			} else {
				slide.classList.remove('slideshow__slide--visible');
			}
		});

		dotButtons.forEach((dot_button, dot_index) => {
			if (dot_index === currentSlideIndex) {
				dot_button.classList.add('slideshow__dot-button--active');
			} else {
				dot_button.classList.remove('slideshow__dot-button--active');
			}
		});
	};

	// 8. run "goToPreviousSlide" and then "renderSlideshow" when I "click" on "previousButton"
	previousButton.addEventListener('click', () => {
		goToPreviousSlide();
		renderSlideshow();
	});

	// 9. run "goToNextSlide" and then "renderSlideshow" when I "click" on "nextButton"
	nextButton.addEventListener('click', () => {
		goToNextSlide();
		renderSlideshow();
	});

	// 10. for each dot button...
	dotButtons.forEach((dotButton, dotIndex) => {
		// 11. run "goToSingleSlide" using the dotIndex and then "renderSlideshow" when I "click" on "dotButton"
		dotButton.addEventListener('click', () => {
			goToSingleSlide(dotIndex);
			renderSlideshow();
		});
	});
});
