import Swiper, { Navigation, Autoplay, Lazy } from 'swiper';
import 'swiper/css';

import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.min.js';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

window.all_swipers_DOM = new Array();
let all_swipers = new Array();
let all_galleries_DOM = new Array();
let all_galleries = new Array();


const config_single = {
	modules: [Navigation, Autoplay],
	
	loop: true,
	slidesPerView: 1,
	spaceBetween: 32,

	autoplay: true,
	autoplay: {
		delay: 3000,
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			spaceBetween: 16,
		},
		// when window width is >= 480px
		689: {
			spaceBetween: 24,
		},
		// when window width is >= 1024px
		992: {
			spaceBetween: 24,
		}
	},

	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
};

const config_pano = {
	modules: [Navigation, Autoplay],
	
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 32,

	autoplay: true,
	autoplay: {
		delay: 40000,
	},

	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		// when window width is >= 320px
		320: {
			spaceBetween: 16,
			slidesPerView: 1,
			autoplay: {
				delay: 4000,
			},
		},
		// when window width is >= 480px
		689: {
			spaceBetween: 24,
			slidesPerView: 1,
		},
		// when window width is >= 1024px
		992: {
			spaceBetween: 24,
			slidesPerView: "auto",
			autoplay: {
				delay: 20000,
			},
		}
	},
};

// Init all Swipers and Lightboxes
function initAll() {
	all_swipers_DOM = document.getElementsByClassName("swiper");
	all_galleries_DOM = document.querySelectorAll(".my-gallery");

	if(all_swipers_DOM != null && all_galleries_DOM != null) {
		for (let i = 0; i < all_swipers_DOM.length; i++) {

			switch (all_swipers_DOM[i].dataset.swtype) {
				case "swiper-pano":
					all_swipers[i] = new Swiper(all_swipers_DOM[i], config_pano);
					break;
				
				case "swiper-single":
					all_swipers[i] = new Swiper(all_swipers_DOM[i], config_single);
					break;
			}

			// all_swipers[i] = new Swiper(all_swipers_DOM[i], config_sliderright);
			all_galleries[i] = new initPhotoSwipeFromDOM(all_galleries_DOM[i], all_swipers[i]);

		}

		// console.log(all_swipers);

		// console.log("init all swipers");
	}
	else { console.log("Arrays empty. Nothing to do here"); }
}

 var initPhotoSwipeFromDOM = function(gallerySelector, swiperElem) {
	// parse slide data (url, title, size ...) from DOM elements
	// (children of gallerySelector)
	var parseThumbnailElements = function(el) {
	  var thumbElements = el.childNodes,
			numNodes = thumbElements.length,
			items = [],
			figureEl,
			linkEl,
			size,
			item;
 
	  for (var i = 0; i < numNodes; i++) {
		 figureEl = thumbElements[i]; // <figure> element
 
		 // include only element nodes
		 if (figureEl.nodeType !== 1) {
			continue;
		 }
 
		 linkEl = figureEl.children[0]; // <a> element
 
		 size = linkEl.getAttribute("data-size").split("x");
 
		 // create slide object
		 item = {
			src: linkEl.getAttribute("href"),
			w: parseInt(size[0], 10),
			h: parseInt(size[1], 10)
		 };
 
		 if (figureEl.children.length > 1) {
			// <figcaption> content
			item.title = figureEl.children[1].innerHTML;
		 }
 
		 if (linkEl.children.length > 0) {
			// <img> thumbnail element, retrieving thumbnail url
			item.msrc = linkEl.children[0].children[2].getAttribute("src");
		 }
 
		 item.el = figureEl; // save link to element for getThumbBoundsFn
		 items.push(item);
	  }
 
	  return items;
	};
 
	// find nearest parent element
	var closest = function closest(el, fn) {
	  return el && (fn(el) ? el : closest(el.parentNode, fn));
	};
 
	// triggers when user clicks on thumbnail
	var onThumbnailsClick = function(e) {
	  e = e || window.event;
	  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
 
	  var eTarget = e.target || e.srcElement;
 
	  // find root element of slide
	  var clickedListItem = closest(eTarget, function(el) {
		 return el.tagName && el.tagName.toUpperCase() === "LI";
	  });
 
	  if (!clickedListItem) {
		 return;
	  }
 
	  // find index of clicked item by looping through all child nodes
	  // alternatively, you may define index via data- attribute
	  var clickedGallery = clickedListItem.parentNode,
			childNodes = clickedListItem.parentNode.childNodes,
			numChildNodes = childNodes.length,
			nodeIndex = 0,
			index;
 
	  for (var i = 0; i < numChildNodes; i++) {
		 if (childNodes[i].nodeType !== 1) {
			continue;
		 }
 
		 if (childNodes[i] === clickedListItem) {
			index = nodeIndex;
			break;
		 }
		 nodeIndex++;
	  }
 
	  if (index >= 0) {
		 // open PhotoSwipe if valid index found
		 openPhotoSwipe(index, clickedGallery);
	  }
	  return false;
	};
 
	// parse picture index and gallery index from URL (#&pid=1&gid=2)
	var photoswipeParseHash = function() {
	  var hash = window.location.hash.substring(1),
			params = {};
 
	  if (hash.length < 5) {
		 return params;
	  }
 
	  var vars = hash.split("&");
	  for (var i = 0; i < vars.length; i++) {
		 if (!vars[i]) {
			continue;
		 }
		 var pair = vars[i].split("=");
		 if (pair.length < 2) {
			continue;
		 }
		 params[pair[0]] = pair[1];
	  }
 
	  if (params.gid) {
		 params.gid = parseInt(params.gid, 10);
	  }
 
	  return params;
	};
 
	var openPhotoSwipe = function(
	index,
	 galleryElement,
	 disableAnimation,
	 fromURL
	) {
	  var pswpElement = document.querySelectorAll(".pswp")[0],
			gallery,
			options,
			items;
 
	  items = parseThumbnailElements(galleryElement);
 
	  // #################### 3/4 define photoswipe options (if needed) #################### 
	  // https://photoswipe.com/documentation/options.html //
	  options = {
		 /* "showHideOpacity" uncomment this If dimensions of your small thumbnail don't match dimensions of large image */
		 showHideOpacity:true,
 
		 // Buttons/elements
		 closeEl: true,
		 captionEl: true,
		 fullscreenEl: true,
		 zoomEl: true,
		 shareEl: false,
		 counterEl: false,
		 arrowEl: true,
		 preloaderEl: true,
		 // define gallery index (for URL)
		 galleryUID: galleryElement.getAttribute("data-pswp-uid"),
		 getThumbBoundsFn: function(index) {
			// See Options -> getThumbBoundsFn section of documentation for more info
			var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
				 pageYScroll =
				 window.pageYOffset || document.documentElement.scrollTop,
				 rect = thumbnail.getBoundingClientRect();
 
			return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
		 }
	  };
 
	  // PhotoSwipe opened from URL
	  if (fromURL) {
		 if (options.galleryPIDs) {
			// parse real index when custom PIDs are used
			// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
			for (var j = 0; j < items.length; j++) {
			  if (items[j].pid == index) {
				 options.index = j;
				 break;
			  }
			}
		 } else {
			// in URL indexes start from 1
			options.index = parseInt(index, 10) - 1;
		 }
	  } else {
		 options.index = parseInt(index, 10);
	  }
 
	  // exit if index not found
	  if (isNaN(options.index)) {
		 return;
	  }
 
	  if (disableAnimation) {
		 options.showAnimationDuration = 0;
	  }
 
	  // Pass data to PhotoSwipe and initialize it
	  gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
	  gallery.init();
 
	  /* ########### PART 4 - EXTRA CODE  ########### */
	  /* EXTRA CODE (NOT FROM photoswipe CORE) - 
	  1/2. UPDATE SWIPER POSITION TO THE "CURRENT" ZOOM_IN IMAGE (BETTER UI) */
	  // photoswipe event: Gallery unbinds events
	  // (triggers before closing animation)
	  gallery.listen("unbindEvents", function() {
		 // The index of the current photoswipe slide
		 let getCurrentIndex = gallery.getCurrentIndex();
		 // Update position of the slider
		 swiperElem.slideTo(getCurrentIndex, 0, false);
		 // 2/2. Start swiper autoplay (on close - if swiper autoplay is true)
			swiperElem.autoplay.start();
	  });
	  // 2/2. Extra Code (Not from photoswipe) - swiper autoplay stop when image in zoom mode (When lightbox is open) */
	  gallery.listen('initialZoomIn', function() {
		 if(swiperElem.autoplay.running){
			swiperElem.autoplay.stop();
		 }
	  });
	};
 
	// loop through all gallery elements and bind events
	var galleryElements = all_galleries_DOM;

	for (var i = 0, l = galleryElements.length; i < l; i++) {
	  galleryElements[i].setAttribute("data-pswp-uid", i + 1);
	  galleryElements[i].onclick = onThumbnailsClick;
	}
 
	// Parse URL and open gallery if it contains #&pid=3&gid=1
	var hashData = photoswipeParseHash();
	if (hashData.pid && hashData.gid) {
	  openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
	}
 };
 


// run functions if the DOM is ready
function ready() {
	initAll();
	
	setTimeout(() => {
		for (let i = 0; i < all_swipers_DOM.length; i++) {
			all_swipers_DOM[i].swiper.update();
		}
	}, 2000);
}

if (document.readyState === "complete") {
	ready();
} else {
	document.addEventListener("DOMContentLoaded", ready);
}