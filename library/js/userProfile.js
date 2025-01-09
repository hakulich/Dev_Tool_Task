function getNumberOfOwnBooks(user) {
	return user.ownBook.length;
}

function getNumberOfVisits(user) {
	return user.numberOfVisits;
}

function increaseNumberOfVisits(user, n) {
	user.numberOfVisits += n;
	updateUserInLocalStorage(user);
}

function saveBuyingLibraryCard(user) {
	user.hasLibraryCard = true;
	updateUserInLocalStorage(user);
}

function addBookToCard(user, book) {
	let ownBook = user.ownBook;
	ownBook.push(book);
	updateUserInLocalStorage(user);
}

function hasLibraryCard(user) {
	return user.hasLibraryCard;
}

const updateUserInLocalStorage = (user) => {
	let profiles = getUserProfiles();

	userIndex = profiles.findIndex(
		(profile) =>
			(profile.email === user.email || profile.cardNumber === user.cardNumber) &&
			profile.password === user.password,
	);

	profiles[userIndex] = user;

	localStorage.setItem("userProfiles", JSON.stringify(profiles));
};

const isUserLogIn = () => {
	return localStorage.getItem("isLogIn") === "true";
};

/*
function getOwnedBooks() {
	return JSON.parse(localStorage.getItem("ownBook"));
}*/

function getInitials(user) {
	let firstSymbol = user.firstName[0].toUpperCase();
	let secondSymbol = user.lastName[0].toUpperCase();
	return firstSymbol + secondSymbol;
}

function getUserFullName(user) {
	return user.firstName + " " + user.lastName;
}

function getCardNumber() {
	return localStorage.getItem("cardNumber");
}

function getUserProfiles() {
	return JSON.parse(localStorage.getItem("userProfiles"));
}

const createUserProfile = (userFrom) => {
	return {
		firstName: userFrom["firstName"],
		lastName: userFrom["lastName"],
		email: userFrom["email"],
		password: userFrom["password"],
		cardNumber: generateCardNumber(),
		ownBook: [],
		hasLibraryCard: "false",
		numberOfVisits: 0,
	};
};

const addToUserProfiles = (profile) => {
	let existingProfiles = localStorage.getItem("userProfiles");

	if (existingProfiles.length === 0) {
		return [profile];
	} else {
		let existingProfileToArr = JSON.parse(existingProfiles);
		return existingProfileToArr.concat(profile);
	}
};

const isUserExists = (login, password) => {
	let profiles = getUserProfiles();

	for (let i = 0; i < profiles.length; i++) {
		if (
			(profiles[i].email === login || profiles[i].cardNumber === login) &&
			profiles[i].password === password
		) {
			return true;
		}
	}

	return false;
};

const isLibraryCardExist = (userName, cardNumber) => {
	let profiles = getUserProfiles();

	for (let i = 0; i < profiles.length; i++) {
		if (profiles[i].firstName === userName && profiles[i].cardNumber === cardNumber) {
			return true;
		}
	}

	return false;
};

const getUserFromProfilesByCard = (userName, cardNumber) => {
	let profiles = getUserProfiles();

	for (let i = 0; i < profiles.length; i++) {
		if (profiles[i].firstName === userName && profiles[i].cardNumber === cardNumber) {
			return profiles[i];
		}
	}
};

const getUserFromProfiles = (login, password) => {
	let profiles = getUserProfiles();

	for (let i = 0; i < profiles.length; i++) {
		if (
			(profiles[i].email === login || profiles[i].cardNumber === login) &&
			profiles[i].password === password
		) {
			return profiles[i];
		}
	}
};

function saveUserProfileToLocalStorage(userProfile) {
	//localStorage.setItem("ownBook", JSON.stringify([]));
	localStorage.setItem("hasLibraryCard", "false");

	localStorage.setItem("userProfiles", JSON.stringify(addToUserProfiles(userProfile)));
}
