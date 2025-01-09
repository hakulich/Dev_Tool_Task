document.addEventListener("DOMContentLoaded", function () {
	const btnsSeasons = document.querySelectorAll(".season");
	const winterBooks = document.querySelector(".winter");
	const springBooks = document.querySelector(".spring");
	const summerBooks = document.querySelector(".summer");
	const autumnBooks = document.querySelector(".autumn");

	const seasonsBooks = document.querySelectorAll(".sub-favorite");
	const sectionRadios = document.querySelector(".seasons-box");

	const favoriteSection = document.querySelector(".favorite-text");
	const coffeeSection = document.querySelector(".coffeShop");

	//Functions

	function hideAllSeasons() {
		for (let i = 0; i < seasonsBooks.length; i++) {
			seasonsBooks[i].classList.add("hide-season");
		}
	}

	function stickSection() {
		if (window.innerWidth <= "768") {
			let stickyStart = favoriteSection.offsetTop;
			let stickyStop = coffeeSection.offsetTop;
			let currentState = window.pageYOffset;

			if (window.pageYOffset > stickyStart && window.pageYOffset < stickyStop - 50) {
				sectionRadios.classList.add("sticky");
			} else {
				sectionRadios.classList.remove("sticky");
			}
		} else {
			sectionRadios.classList.remove("sticky");
		}
	}

	//EventListener

	btnsSeasons[0].addEventListener("click", () => {
		hideAllSeasons();
		winterBooks.classList.remove("hide-season");
		btnsBookBuy = document.querySelectorAll(".buyBtn");
	});
	btnsSeasons[1].addEventListener("click", () => {
		hideAllSeasons();
		springBooks.classList.remove("hide-season");
		btnsBookBuy = document.querySelectorAll(".buyBtn");
	});
	btnsSeasons[2].addEventListener("click", () => {
		hideAllSeasons();
		summerBooks.classList.remove("hide-season");
		btnsBookBuy = document.querySelectorAll(".buyBtn");
	});
	btnsSeasons[3].addEventListener("click", () => {
		hideAllSeasons();
		autumnBooks.classList.remove("hide-season");
		btnsBookBuy = document.querySelectorAll(".buyBtn");
	});

	window.onscroll = function () {
		stickSection();
	};
});
