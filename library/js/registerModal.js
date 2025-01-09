const modalRegister = document.querySelector(".modal-register");
const btnCloseRegister = document.querySelector(".btn-cross-register");
const btnRegisterMenu = document.querySelector(".btn-register");
const btnSigUpInReaderCard = document.querySelector(".signUp");
const formRegister = document.querySelector(".register-form");
const linkLogIn = document.querySelector(".logIn-link");

// Register Modal
function openRegisterModal() {
	//open modal
	modalRegister.classList.add("open");
	overlay.classList.remove("hidden");
	//close all other opened modals
	profileMenu.classList.remove("open");
	modalLogIn.classList.remove("open");
}

const closeRegisterModal = function () {
	modalRegister.classList.remove("open");
	overlay.classList.add("hidden");
};

function handleRegisterFormSubmit(event) {
	event.preventDefault();
	let registerUser = serializeForm(formRegister);

	ACTIVE_USER = createUserProfile(registerUser);
	saveUserProfileToLocalStorage(registerUser);
	// Close register modal
	closeRegisterModal();
	formRegister.reset();
	//Turn ON Auth view
	changeProfileMenuForAuthUser();
}
