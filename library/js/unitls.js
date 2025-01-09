function showError(parentElement, errorMessage) {
	const error = document.createElement("div");
	error.classList.add("error-message");
	error.innerText = errorMessage;

	parentElement.appendChild(error);
}

function removeError() {
	let errorElement = document.querySelector(".error-message");

	if (errorElement) errorElement.remove();
}

const generateCardNumber = () => {
	let max = 9999999999;
	let min = 9000000000;
	let randomNumber = Math.floor(Math.random() * (max - min) + min);
	return randomNumber.toString(16).toUpperCase();
};

const serializeForm = (form) => {
	const formData = new FormData(form);
	let obj = {};

	for (let [key, value] of formData) {
		obj[key] = value;
	}
	return obj;
};
