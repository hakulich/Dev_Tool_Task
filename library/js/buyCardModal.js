const modalBuyBook = document.querySelector(".modal-buy-book");
const btnCloseBuyBook = document.querySelector(".btn-cross-buy");
const btnLibraryCard = document.querySelector(".btn-buy-book");
const fieldsLibraryCard = document.querySelectorAll(".buy-modal-field");
const sectionBooks = document.querySelectorAll(".favorite");

function findBookByName(nodeList, bookName) {
	for (let i = 0; i < nodeList.length; i++) {
		if (nodeList[i].querySelector(".book-name").innerText === bookName) return nodeList[i];
	}
}

function changeBuyToOwn(btn) {
	btn.innerText = "Own";
	btn.classList.remove("buyBtn");
	btn.classList.add("ownBtn");
}

function changeOwnToBuy(btn) {
	btn.innerText = "Buy";
	btn.classList.remove("ownBtn");
	btn.classList.add("buyBtn");
}

function showBooksForAuthUser(user) {
	const books = user.ownBook;

	for (let i = 0; i < books.length; i++) {
		let bookElement = findBookByName(sectionBooks, books[i][0]);

		if (bookElement) {
			let btnBook = bookElement.getElementsByTagName("button")[0];
			changeBuyToOwn(btnBook);
		}
	}
}

function resetBookSate() {
	for (let i = 0; i < sectionBooks.length; i++) {
		let btnBook = sectionBooks[i].getElementsByTagName("button")[0];
		changeOwnToBuy(btnBook);
	}
}

//Buy Library Card Modal

const showBuyBookModal = (element) => {
	if (!isUserLogIn()) {
		showLogInModal();
		return;
	}

	if (ACTIVE_USER.hasLibraryCard === "false" && isUserLogIn()) {
		modalBuyBook.classList.add("open");
		overlay.classList.remove("hidden");
		enableBuyLibraryCard();
		return;
	}

	if (ACTIVE_USER.hasLibraryCard === true && isUserLogIn() && element.innerText != "Own") {
		let bookName = element.parentElement.querySelector(".book-name").innerText;
		let bookAuth = element.parentElement.querySelector(".book-author").innerText;

		addBookToCard(ACTIVE_USER, [bookName, bookAuth]);
		showBooksForAuthUser(ACTIVE_USER);
		fieldBookAmount.innerText = getNumberOfOwnBooks(ACTIVE_USER);
	}
};

const closeBuyBookModal = function () {
	modalBuyBook.classList.remove("open");
	overlay.classList.add("hidden");
};

const buyLibraryCard = function (event) {
	event.preventDefault();
	modalBuyBook.classList.remove("open");
	overlay.classList.add("hidden");
	saveBuyingLibraryCard(ACTIVE_USER);
};

// Enable/Disable Buy Library Card Button
function enableBuyLibraryCard() {
	let isInvalid = false;
	for (let i = 0; i < fieldsLibraryCard.length; i++) {
		if (fieldsLibraryCard[i].value.trim() === null || fieldsLibraryCard[i].value.trim() === "") {
			isInvalid = true;
			break;
		}
	}
	btnLibraryCard.disabled = isInvalid;
}
