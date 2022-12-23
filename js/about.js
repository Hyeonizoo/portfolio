
class Example {
    constructor(options) {
      this.root = options.root;
  
      this.init();
  
      setTimeout(this.showImages.bind(this), 1000);
    }
  
    init() {
      this.scroll = new LocomotiveScroll({
        el: this.root,
        direction: 'horizontal',
        smooth: true,
        lerp: 0.05,
        tablet: {
          smooth: true },
  
        smartphone: {
          smooth: true } 
        });
  
  
  
      this.images = this.root.querySelectorAll('.image');
  
      [].forEach.call(this.images, image => {
        image.addEventListener('click', () => {
          image.classList.add('-clicked');
          this.hideImages();
        });
      });
    }
  
    showImages() {
      [].forEach.call(this.images, image => {
        image.classList.remove('-clicked');
        image.classList.add('-active');
      });
    }
  
    hideImages() {
      [].forEach.call(this.images, image => {
        image.classList.remove('-active');
      });
  
      setTimeout(this.showImages.bind(this), 2000);
    }}
  
  
  
  window.addEventListener('DOMContentLoaded', event => {
    const example = new Example({
      root: document.querySelector('.scroll-animations-example') });
  
  });


  // custom cursor
  let mouseCursor = document.querySelector(".cursor");
  let navLinks = document.querySelectorAll(".gnb li a");
  window.addEventListener("scroll", cursor);
  window.addEventListener("mousemove", cursor);
  function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
  }