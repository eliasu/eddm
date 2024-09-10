// const axios = require('axios').default;
import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

let form;
let formSubmit;

function hideForm() {
	let e = form.getElementsByClassName('text-s');
	
	for (var i = 0; i < e.length; i++) {
		e[i].style.display = 'none';
  	}
	
	e = form.getElementsByClassName('f-check');
	
	for (var i = 0; i < e.length; i++) {
		e[i].style.display = 'none';
  	}

	// remove event Listeners
	form.replaceWith(form.cloneNode(true));
}

function looseFocus() {
	let el = document.querySelector( ':focus' );
	if( el ) el.blur();
}

function setFormSuccess() {
	formSubmit.classList.add("fs_success");
	formSubmit.textContent = "Danke"
	
	looseFocus();
	hideForm();

	console.log("Form Submission successfull!");
}

function setFormError() {
	formSubmit.classList.add("fs_error");
	formSubmit.textContent = "Fehler. Bitte versuche es erneut.";
	
	looseFocus();
	hideForm();

	console.log("Error with submitting …");
}

// add all eventlisteners for buttons etc.
function addListeners() {
	form = document.getElementById("form-footer");
	formSubmit = document.getElementById("form-footer_submit");
	
	form.addEventListener("submit", function (e) {
		looseFocus();
		
		var formData = new FormData(form);

		// prevent default post method by statamic
		e.preventDefault();

		// submit data
		axios.post(form.action, formData)
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
			addListeners();
			break;
	}
});

