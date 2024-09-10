let close_btn;

function initEyeCatcher() {
	close_btn = document.getElementById("eyecatcher-close");
   if(close_btn !== null) close_btn.addEventListener("click", close);
}

function close () {
	close_btn.parentElement.style.display = 'none';
}

 document.addEventListener('readystatechange', (event) => {
	switch (document.readyState) {
		case "complete":
			initEyeCatcher();
			break;
	}
});