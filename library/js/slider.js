document.addEventListener("DOMContentLoaded", function () {
	const slideLine = document.querySelector(".slides-container");
	const slides = document.querySelectorAll(".slide");
	const btnPrev = document.querySelector(".arrow-section-left");
	const btnNext = document.querySelector(".arrow-section-rigth");

	const arrowPrev = btnPrev.querySelector(".arrow-prev");
	const arrowNext = btnNext.querySelector(".arrow-next");
	const dots = document.querySelectorAll(".dot");

	let position = 0,
		dotIndex = 0;

	//Functions

	const disabledCorderArrows = (index) => {
		arrowPrev.classList.remove("toInactive");
		arrowNext.classList.remove("toInactive");

		if (dotIndex === slides.length - 1) {
			arrowNext.classList.add("toInactive");
		}

		if (dotIndex === 0) {
			arrowPrev.classList.add("toInactive");
		}
	};

	const findNumberOfIteration = () => {
		if (window.innerWidth > "768") {
			return 2;
		} else return 4;
	};

	const nextSlide = () => {
		if (position < 475 * findNumberOfIteration()) {
			position += 475;
			dotIndex++;
		}

		slideLine.style.left = -position + "px";
		thisSlide(dotIndex);
		disabledCorderArrows(dotIndex);
	};

	const prevSlide = () => {
		if (position > 0) {
			position -= 475;
			dotIndex--;
		}

		slideLine.style.left = -position + "px";
		thisSlide(dotIndex);
		disabledCorderArrows(dotIndex);
	};

	const thisSlide = (index) => {
		for (let dot of dots) {
			dot.classList.remove("active");
		}

		dots[index].classList.add("active");
	};

	const dotSlide = (index) => {
		position = 475 * index;
		slideLine.style.left = -position + "px";
		dotIndex = index;
		thisSlide(dotIndex);
		disabledCorderArrows(dotIndex);
	};

	function windowResize() {
		if (window.innerWidth > "768") {
			if (dotIndex > 2) {
				dotSlide(2);
			}
		}
	}

	//Listener

	btnNext.addEventListener("click", nextSlide);
	btnPrev.addEventListener("click", prevSlide);

	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			dotSlide(index);
		});
	});

	window.addEventListener("resize", windowResize);
});
