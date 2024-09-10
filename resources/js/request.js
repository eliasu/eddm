// const axios2 = require('axios').default;
import axios2 from 'axios';

axios2.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let form; 
let formSubmit; 

function looseFocus() {
	let el = document.querySelector( ':focus' );
	if( el ) el.blur();
}

function setFormSuccess() {
	form.classList.add("fs_fade");
	form.classList.add("fs_block");

	formSubmit.classList.remove("fs_pending");
	formSubmit.classList.add("fs_success");
	formSubmit.textContent = "Danke!"

	console.log("Form Submission successfull!");
}

function setFormPending() {
	form.classList.add("fs_fade");

	formSubmit.classList.add("fs_pending");
	formSubmit.textContent = "Senden …"
	
	looseFocus();

	console.log("Form is sending …");
}

function setFormError() {
	form.classList.add("fs_fade");
	formSubmit.classList.remove("fs_pending");
	formSubmit.classList.add("fs_error");
	formSubmit.textContent = "Fehler. Bitte versuche es erneut.";

	console.log("Error with submitting …");
}

// add all eventlisteners for buttons etc.
function addListeners() {
	form = document.getElementById("form-request");
	formSubmit = document.getElementById("form_submit");

	
	form.addEventListener("submit", function (e) {
		setFormPending();

		var formData = new FormData(form);
		e.preventDefault();

		// submit data
		axios2.post(form.action, formData)
			.then(response => {
				setFormSuccess();
			})
			.catch(error => {
				console.log(error)
				setFormError();
			})
	});
}

document.addEventListener('readystatechange', (event) => {
	switch (document.readyState) {
		case "complete":
			console.log("Start Up Form Logic!")
			addListeners();
			break;
	}
});
