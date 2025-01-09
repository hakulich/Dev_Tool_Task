function initMainPageControls() {
	let ACTIVE_USER = {};
	let btnsBookBuy = document.querySelectorAll(".buyBtn");
	const bntBurger = document.getElementById("burger-btn");
	const header = document.querySelector(".header");
	const overlay = document.querySelector(".shadow-overlay");
	const btnProfile = document.querySelector(".profile");
	const btnProfileAuth = document.querySelector(".profile-auth");
	const profileMenu = document.querySelector(".profile-menu-container");
	const btnLogOut = document.querySelector(".btn-logOut");
	const buyCardForm = document.querySelector(".buy-card-form");

	if (localStorage.getItem("userProfiles") === null) {
		localStorage.setItem("userProfiles", JSON.stringify([]));
	}

	if (localStorage.getItem("isLogIn") === null) {
		localStorage.setItem("isLogIn", "false");
	}

	/**
	 * Burger Menu
	 */
	bntBurger.addEventListener("click", function () {
		header.classList.toggle("open");
		profileMenu.classList.remove("open");
	});

	bntBurger.addEventListener("click", (event) => {
		event._isClickWithInMenu = true;
	});

	/**
	 * Profile Menu
	 */

	btnProfile.addEventListener("click", function () {
		profileMenu.classList.toggle("open");
		header.classList.remove("open");
	});

	btnProfile.addEventListener("click", (event) => {
		event._isClickWithInProfile = true;
	});

	btnProfileAuth.addEventListener("click", function () {
		profileMenu.classList.toggle("open");
		header.classList.remove("open");
	});

	btnProfileAuth.addEventListener("click", (event) => {
		event._isClickWithInProfile = true;
	});

	/**
	 * Buy Library Card Modal
	 */
	for (let i = 0; i < btnsBookBuy.length; i++) {
		btnsBookBuy[i].addEventListener("click", () => {
			showBuyBookModal(btnsBookBuy[i]);
		});
	}

	buyCardForm.addEventListener("submit", buyLibraryCard);

	for (let i = 0; i < fieldsLibraryCard.length; i++) {
		fieldsLibraryCard[i].addEventListener("keyup", enableBuyLibraryCard);
	}

	btnCloseBuyBook.addEventListener("click", closeBuyBookModal);

	overlay.addEventListener("click", closeBuyBookModal);

	/**
	 * Register Modal
	 */

	btnRegisterMenu.addEventListener("click", openRegisterModal);

	btnSigUpInReaderCard.addEventListener("click", openRegisterModal);

	linkRegister.addEventListener("click", openRegisterModal);
	formRegister.addEventListener("submit", handleRegisterFormSubmit);

	btnCloseRegister.addEventListener("click", closeRegisterModal);

	overlay.addEventListener("click", closeRegisterModal);

	/**
	 * LogIn Modal
	 */

	btnLogInMenu.addEventListener("click", showLogInModal);

	btnLogInInReaderCard.addEventListener("click", showLogInModal);

	linkLogIn.addEventListener("click", showLogInModal);

	loginForm.addEventListener("submit", makeLogIn);

	btnCloseLogIn.addEventListener("click", closeLogInModal);

	overlay.addEventListener("click", closeLogInModal);

	/**
	 * My Profile Modal
	 */

	btnMyProfile.addEventListener("click", openUserInfoModal);

	btnCopyCardNumber.addEventListener("click", copyCardNumber);

	btnCloseMyProfile.addEventListener("click", closeUserInfoModal);

	overlay.addEventListener("click", closeUserInfoModal);

	/**
	 * Check Card
	 */

	readerForm.addEventListener("submit", checkIfCardExists);

	fieldReaderName.addEventListener("keyup", removeError);

	fieldCardNumber.addEventListener("keyup", removeError);

	/**
	 * LogOut
	 */

	btnLogOut.addEventListener("click", logOut);

	//////

	document.body.addEventListener("click", (event) => {
		if (event._isClickWithInMenu) return;
		if (event._isClickWithInProfile) return;
		header.classList.remove("open");
		profileMenu.classList.remove("open");
	});
}
