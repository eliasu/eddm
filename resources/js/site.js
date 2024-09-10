import 'lazysizes';
import '@finsweet/cookie-consent';
import './nav.js';
import './newsletter-footer.js';
import './eye-catcher.js';

let debug = true;

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
		case "complete":
			interactive();
		break;
	}
});