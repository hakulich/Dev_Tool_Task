const logOut = function () {
	const profileIconNonAuth = document.querySelector(".profile");
	const profileIconAuth = document.querySelector(".profile-auth");
	const labelProfile = document.querySelector(".profile-label");
	const btnLogIn = document.querySelector(".btn-logIn");
	const btnLogInRegister = document.querySelector(".btn-register");
	const btnMyProfile = document.querySelector(".btn-my-profile");
	const btnLogOut = document.querySelector(".btn-logOut");
	let btnLogInInReadCard = document.querySelector(".signUp");
	let btnRegisterInInReadCard = document.querySelector(".logIn");

	labelProfile.innerText = "Profile";
	btnLogIn.classList.remove("hide");
	btnLogInRegister.classList.remove("hide");
	btnMyProfile.classList.add("hide");
	btnLogOut.classList.add("hide");
	profileIconNonAuth.classList.remove("hide");
	profileIconAuth.classList.add("hide");
	profileIconAuth.innerText = getInitials(ACTIVE_USER);
	profileMenu.classList.toggle("authorized");
	btnLogInInReadCard.classList.remove("hide");
	btnRegisterInInReadCard.classList.remove("hide");

	//change books button to Buy for owned books
	resetBookSate();
	localStorage.setItem("isLogIn", "false");
	resetLibraryCard();
};
