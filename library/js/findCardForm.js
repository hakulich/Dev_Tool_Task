const readerForm = document.querySelector(".reader-form");
const btnCheckCard = document.querySelector(".btnCheckCard");
const sectionCardInfo = document.querySelector(".check-card-container");
const fieldReaderName = document.querySelector(".readerName");
const fieldCardNumber = document.querySelector(".cardNumber");
const fieldVisitsAmount = document.querySelector(".visits-amount-find-section");
const fieldBookAmount = document.querySelector(".book-amount-find-section");
const elementForErrorMessage = document.querySelector(".btnCheckCard");

//Functions
const showProfileInfo = (profile) => {
	// Add calculated data
	fieldVisitsAmount.innerText = getNumberOfVisits(profile);
	fieldBookAmount.innerText = getNumberOfOwnBooks(profile);
	// Display Profile Infro
	sectionCardInfo.classList.add("open");
	// Hide [Check Card] button
	btnCheckCard.classList.add("hide");
};

const showLibraryCardForAuthUser = () => {
	//Fill fileds based on selected user
	fieldReaderName.value = ACTIVE_USER.firstName;
	fieldCardNumber.value = ACTIVE_USER.cardNumber;
	// Open Profile Card
	showProfileInfo(ACTIVE_USER);
};

const showLibraryCardForNonAuthUser = (userName, cardNumber) => {
	let searchProfile = getUserFromProfilesByCard(userName, cardNumber);

	showProfileInfo(searchProfile);
};

const resetLibraryCard = () => {
	//claear value in form
	fieldReaderName.value = "";
	fieldCardNumber.value = "";
	// hide Profile Infro
	sectionCardInfo.classList.remove("open");
	// Display [Check Card] button
	btnCheckCard.classList.remove("hide");
};

const checkIfCardExists = (event) => {
	event.preventDefault();
	let userName = fieldReaderName.value;
	let cardNumber = fieldCardNumber.value;

	if (isLibraryCardExist(userName, cardNumber)) {
		showLibraryCardForNonAuthUser(userName, cardNumber);
		setTimeout(() => {
			resetLibraryCard();
		}, 5 * 1000);
	} else {
		if (!document.querySelector(".error-message")) {
			showError(elementForErrorMessage, "Library card is not found");
			setTimeout(() => {
				removeError();
			}, 5 * 1000);
		}
	}
};
