/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./resources/js/eye-catcher.js ***!
  \*************************************/
var close_btn;

function initEyeCatcher() {
  close_btn = document.getElementById("eyecatcher-close"); // if(close_btn != )

  close_btn.addEventListener("click", close);
}

function close() {
  close_btn.parentElement.style.display = 'none';
}

document.addEventListener('readystatechange', function (event) {
  switch (document.readyState) {
    case "complete":
      initNav();
      break;
  }
});
/******/ })()
;
//# sourceMappingURL=eye-catcher.js.map