;(function() {
    window.onscroll = function() {
        var scrollElem = document.getElementById("scrollToTop");
        if (document.body.scrollTop > document.documentElement.clientHeight) {
           scrollElem.style.opacity = "1";
        } 
        
        else {
            scrollElem.style.opacity = "0";
        }
    }
     

    var timeOut;
    function goUp() {
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        
        if(top > 0) {
            window.scrollBy(0,-100);
            timeOut = setTimeout('goUp()',20);
        } 
        
        else clearTimeout(timeOut);
    }
})();


    /*'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);*/


