import 'lazysizes';
import '@finsweet/cookie-consent';

let debug = true;

function disableLogger() {
	window['console']['log'] = function() {};
}

function interactive() {
	if(!debug) disableLogger();
}

document.addEventListener('readystatechange', (event) => {
	switch (document.readyState) {
		case "loading":
			break;
		case "interactive":
			interactive();
			break;
		case "complete":
			break;
	}
});