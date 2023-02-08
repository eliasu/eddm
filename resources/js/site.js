import 'lazysizes';
import '@finsweet/cookie-consent';

let debug = false;

function disableLogger() {
	console.log("#####")
	console.log("JS Debug Off => See 'site.js' ")
	console.log("#####")
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