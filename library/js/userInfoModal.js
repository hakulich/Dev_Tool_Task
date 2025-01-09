const btnCloseMyProfile = document.querySelector(".btn-cross-profile");
const modalMyProfile = document.querySelector(".myProfile-modal ");
const btnMyProfile = document.querySelector(".btn-my-profile");
const btnCopyCardNumber = document.querySelector(".card-copy-img");
const overlay = document.querySelector(".shadow-overlay");
const sectionRentedBooks = document.querySelector(".books-list");
const initialsLabel = document.querySelector(".initials");
const fullNameLabel = document.querySelector(".full-name");
const cardNumberLabel = document.querySelector(".card-number");
const vistsLabel = document.querySelector(".visits-amount");
const bookNumberLabel = document.querySelector(".book-amount");

const clearRentedBookSection = () => {
	while (sectionRentedBooks.lastElementChild) {
		sectionRentedBooks.removeChild(sectionRentedBooks.lastElementChild);
	}
};

const createRentedBookElement = (bookName, bookAuthor) => {
	let book = document.createElement("li");
	book.innerText = `${bookName}, ${bookAuthor}`;
	book.style.marginBottom = "10px";
	return book;
};

const addRentedBooksToModal = () => {
	let rentedBooks = ACTIVE_USER.ownBook;

	for (let i = 0; i < rentedBooks.length; i++) {
		let book = createRentedBookElement(rentedBooks[i][0], rentedBooks[i][1]);
		sectionRentedBooks.appendChild(book);
	}
};

// Actions with element

const closeUserInfoModal = () => {
	modalMyProfile.classList.add("hidden");
	overlay.classList.add("hidden");
	clearRentedBookSection();
};

const openUserInfoModal = () => {
	// Update modal content based on logged user
	initialsLabel.innerText = getInitials(ACTIVE_USER);
	fullNameLabel.innerText = getUserFullName(ACTIVE_USER);
	bookNumberLabel.innerText = getNumberOfOwnBooks(ACTIVE_USER);
	vistsLabel.innerText = getNumberOfVisits(ACTIVE_USER);
	cardNumberLabel.innerText = ACTIVE_USER.cardNumber;
	addRentedBooksToModal();

	//Display My Profile modal
	modalMyProfile.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const copyCardNumber = () => {
	//Create element from which copy
	const elmToCopy = document.createElement("textarea");
	elmToCopy.value = ACTIVE_USER.cardNumber;
	elmToCopy.setAttribute("readonly", "");
	elmToCopy.style.position = "absolute";
	elmToCopy.style.left = "-9999px";
	document.body.appendChild(elmToCopy);
	//Copy
	elmToCopy.select();
	document.execCommand("copy");
	document.body.removeChild(elmToCopy);
};
