//LogIn Modal
const modalLogIn = document.querySelector(".modal-login");
const btnCloseLogIn = document.querySelector(".btn-cross-logIn");
const btnLogInMenu = document.querySelector(".btn-logIn");
const btnLogInInReaderCard = document.querySelector(".logIn");
const linkRegister = document.querySelector(".register-link");
const btnLogInInLogin = document.querySelector(".btnLogIn");
const profileMenu = document.querySelector(".profile-menu-container");

const btnProfileAuth = document.querySelector(".profile-auth");
const elementForErrorMessage2 = document.querySelector(".logIn-form");
const loginForm = document.querySelector(".logIn-form");

//Funstions
const showLogInModal = () => {
  //open log in modal
  modalLogIn.classList.add("open");
  overlay.classList.remove("hidden");
  //close all onther modals
  profileMenu.classList.remove("open");
  modalRegister.classList.remove("open");
};

const closeLogInModal = () => {
  let logIn = document.querySelector(".login-field");
  let pass = document.querySelector(".logIn-form .password");

  modalLogIn.classList.remove("open");
  overlay.classList.add("hidden");
  logIn.value = "";
  pass.value = "";
};

function changeProfileMenuForAuthUser() {
  const profileIconNonAuth = document.querySelector(".profile");
  const profileIconAuth = document.querySelector(".profile-auth");
  const labelProfile = document.querySelector(".profile-label");
  const btnLogIn = document.querySelector(".btn-logIn");
  const btnLogInRegister = document.querySelector(".btn-register");
  const btnMyProfile = document.querySelector(".btn-my-profile");
  const btnLogOut = document.querySelector(".btn-logOut");
  let btnLogInInReadCard = document.querySelector(".signUp");
  let btnRegisterInInReadCard = document.querySelector(".logIn");

  increaseNumberOfVisits(ACTIVE_USER, 1);

  labelProfile.innerText = ACTIVE_USER.cardNumber;
  btnLogIn.classList.add("hide");
  btnLogInRegister.classList.add("hide");
  btnMyProfile.classList.remove("hide");
  btnLogOut.classList.remove("hide");
  profileIconNonAuth.classList.add("hide");
  profileIconAuth.classList.remove("hide");
  profileIconAuth.innerText = getInitials(ACTIVE_USER);
  profileMenu.classList.toggle("authorized");

  btnLogInInReadCard.classList.add("hide");
  btnRegisterInInReadCard.classList.add("hide");

  //add title
  btnProfileAuth.setAttribute("title", getUserFullName(ACTIVE_USER));

  //change books buttons to Own for owned books
  showBooksForAuthUser(ACTIVE_USER);
  localStorage.setItem("isLogIn", "true");
  showLibraryCardForAuthUser();
}

const makeLogIn = () => {
  event.preventDefault();

  let logIn = document.querySelector(".login-field").value;
  let pass = document.querySelector(".logIn-form .password").value;

  if (isUserExists(logIn, pass)) {
    ACTIVE_USER = getUserFromProfiles(logIn, pass);
    changeProfileMenuForAuthUser();
    closeLogInModal();
  } else {
    showError(elementForErrorMessage2, "User is not found");
    setTimeout(() => {
      removeError();
    }, 5 * 1000);
  }
};
