const inputNameEl = document.querySelector(".name")
const inputLastnameEl = document.querySelector(".lastname")
const inputTelEl = document.querySelector(".tel")
const buttonEl = document.querySelector("#btn")
const dataNameEl = document.querySelector(".enteredname")
const dataLastnameEl = document.querySelector(".enteredlastname")
const dataTelEl = document.querySelector(".enteredtel")
let validationPass = false;


buttonEl.addEventListener("click", getInputData)


function getInputData() {
	validationName(inputNameEl, inputLastnameEl, inputTelEl)
	if (validationPass) {
		dataNameEl.innerHTML = dataNameEl.innerHTML + createElement("div", "data enteredname", inputNameEl.value)
		inputNameEl.value = "";
		dataLastnameEl.innerHTML = dataLastnameEl.innerHTML + createElement("div", "data enteredlastname", inputLastnameEl.value)
		inputLastnameEl.value = "";
		dataTelEl.innerHTML = dataTelEl.innerHTML + createElement("div", "data enteredtel", inputTelEl.value)
		inputTelEl.value = "";
		validationPass = false;
	} else {
		alert("Something went wrong! You entered not correct information!")
		return;
	}
}

const createElement = (tag, className, value) =>
	`<${tag} class="${className}">${value}</${tag}>`;

function validationName(el1, el2, el3) {
	if (el1.value.trim() && el2.value.trim() &&
		el3.value.length === 11) {
		validationPass = "true"
		console.log(validationPass)
	} else {
		return console.log(el3.value.length);
	}
}
