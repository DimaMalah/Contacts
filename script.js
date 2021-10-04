const inputNameEl = document.querySelector(".name")
const inputLastnameEl = document.querySelector(".lastname")
const inputTelEl = document.querySelector(".tel")
const buttonEl = document.querySelector("#btn")
const dataNameEl = document.querySelector(".enteredname")
const dataLastnameEl = document.querySelector(".enteredlastname")
const dataTelEl = document.querySelector(".enteredtel")
let result = false;


buttonEl.addEventListener("click", getInputData)


function getInputData() {
	validationName(inputNameEl, inputLastnameEl, inputTelEl)
	if (result === "true") {
		dataNameEl.innerHTML = dataNameEl.innerHTML + "<br>" + inputNameEl.value
		inputNameEl.value = "";
		dataLastnameEl.innerHTML = dataLastnameEl.innerHTML + "<br>" + inputLastnameEl.value
		inputLastnameEl.value = "";
		dataTelEl.innerHTML = dataTelEl.innerHTML + "<br>" + inputTelEl.value
		inputTelEl.value = "";
		result = false;
	} else {
		alert("Something went wrong! You entered not correct information!")
		return;
	}
}


function validationName(el1, el2, el3) {
	if (el1.value.trim() && el2.value.trim() &&
		el3.value.length === 11) {
		result = "true"
		console.log(result)
	} else {
		return console.log(el3.value.length);
	}
}
