var mouseCursor = document.querySelector(".cursor");
var links = document.querySelectorAll("a");
var about = document.querySelector(".moreAbout");

links.forEach(function(menu) {
    menu.addEventListener("mouseover", function() {
        mouseCursor.classList.add("link_hover");
    });
    menu.addEventListener("mouseleave", function() {
        mouseCursor.classList.remove("link_hover");
    });
});

about.addEventListener("mouseover", function() {
  mouseCursor.classList.remove("link_hover");
  mouseCursor.classList.add("link_hover_about");
});
about.addEventListener("mouseleave", function() {
  mouseCursor.classList.remove("link_hover_about");
});

function myCursor(e) {
    gsap.to(mouseCursor, { left: e.pageX, top: e.page });  
    mouseCursor.style.top = e.pageY + "px"; 
    mouseCursor.style.left = e.pageX + "px";
};
window.addEventListener("mousemove", myCursor);
