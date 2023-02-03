let events = new Array();
let events_dom = new Array();

let filters = new Array();
let active = new Array();

let dates = {};
let blocks = {};


function initFilterbar() {
	filters = document.getElementsByClassName("filterbar__btn");
	
	for (let i = 0; i < filters.length; i++) {
		
		filters[i].addEventListener("click", function(elem){
			elem.preventDefault();
			btn_activator(i);
			filter();
		});
		
	}
}

function createMonths() {
	var element = document.createElement("div");
	element.appendChild(document.createTextNode('Das ist ein Monat'));
	document.getElementById('lc').appendChild(element);
}

function filter() {
	// if no filter selected show all
	if(active.length < 1) {
		for (let i = 0; i < blocks.length; i++) {
			blocks[i].style.display = "grid";
		}
		
		for (let i = 0; i < events.length; i++) {
			events[i][0].style.display = "block";
		}
	}

	else {
		// hide all blocks
		for (let i = 0; i < blocks.length; i++) {
			blocks[i].style.display = "none";
		}
		// hide all events
		for (let i = 0; i < events.length; i++) {
			events[i][0].style.display = "none";

			// go through all active tags and compare
			for (let h = 0; h < active.length; h++) {

				// show only items with according tag
				if( events[i][1].includes(active[h]) ) {
					events[i][0].style.display = "block";

					// show block containing this event
					events[i][0].closest('.grid--month-wrap').style.display = "grid";
				}
			}
		}
	}
}


function initEvents() {
	events_dom = document.getElementsByClassName("event-item");

	for (let i = 0; i < events_dom.length; i++) {
		// events[i][0] = element node / [1] = array of tags / [2] = month "4" / [3] = year "2022"

		var temp = events_dom[i].dataset.tags;
		if(temp !== undefined) temp = events_dom[i].dataset.tags.split(",");
		else temp="";

		events[i] = [ 	events_dom[i] , 
							temp, 
							events_dom[i].dataset.month, 
							events_dom[i].dataset.year
						];
	}
	

	// create object to know how many years and how many months there are within
	for (let i = 0; i < events.length; i++) {
		
		// add year if it does not exist
		if(dates[ events[i][3] ] == undefined) 
			dates[ events[i][3] ] = {};

		// add month if it does not exist
		if(dates[ events[i][3] ][ events[i][2] ] == undefined) 
			dates[ events[i][3] ][ events[i][2] ] = 0;

		dates[ events[i][3] ][ events[i][2] ]++;
	}

	createGroups();
}


function createGroups() {
	var sw = document.getElementById("event-list-wrapper");
	var block = document.getElementsByClassName("grid--month-wrap")[0];
	var months = ["Nuller Monat","Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];

	let month_block;
	let cur_month;

	// get all events fitting current month and year and append it to duplicated node
	for (let e = 0; e < events.length; e++) {
		
		// if its the first time in this month create a block
		if (cur_month != events[e][2] ) {
			// only one time execution
			cur_month = events[e][2];
			
			// create Month block
			month_block = block.cloneNode(true);
			month_block.getElementsByClassName("month-name")[0].innerHTML = months[ cur_month ];
			sw.appendChild(month_block);

			console.log("create new Month Tag: " + months[ cur_month ]);
		}	

		// append event to month block
		month_block.getElementsByClassName("grid--events-list")[0].appendChild( events[e][0] );
	}

	// delete template month block
	block.remove();

	// get all blocks in an array
	blocks = sw.getElementsByClassName("grid--month-wrap");
}


function btn_activator(elem) {

	// activate
	if(filters[elem].classList.contains('button--lined') ) {
		filters[elem].classList.remove("button--lined");
		filters[elem].classList.add("button--selected");
		active.push(filters[elem].innerHTML);
	}	
	
	// deactivate
	else if(filters[elem].classList.contains('button--selected') ) {
		filters[elem].classList.remove("button--selected");
		filters[elem].classList.add("button--lined");

		const index = active.indexOf( filters[elem].innerHTML );
		if (index > -1) {
			active.splice(index,1); // 2nd parameter means remove one item only
		}
	}
}


document.addEventListener('readystatechange',(event) => {
	switch (document.readyState) {
		case "complete":
			initFilterbar();
			initEvents();
			break;
	}
});