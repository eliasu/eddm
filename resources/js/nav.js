function nav_action() {
   var nav_links = document.getElementById("nav_links");
   
   if (nav_links.style.display === "flex") {
     nav_links.style.display = null;
   } else {
     nav_links.style.display = "flex";
   }
} 

function initNav() {
   var nav_burger = document.getElementById("nav_burger");
   var nav_close = document.getElementById("nav_close");

   nav_burger.addEventListener("click", nav_action);
   nav_close.addEventListener("click", nav_action);

   console.log("hello du");
}


 document.addEventListener('readystatechange', (event) => {
  switch (document.readyState) {
    case "complete":
      initNav();  
    break;
  }
});