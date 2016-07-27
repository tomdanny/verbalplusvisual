/* ======================================================
   fixed navbar
   ====================================================== */
$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 125) {
      $('.navbar').addClass('navbar-fixed');
      $('.layout-1').addClass('add-layouts-padding');
    }
    if ($(window).scrollTop() < 126) {
      $('.navbar').removeClass('navbar-fixed');
      $('.layout-1').removeClass('add-layouts-padding');
    }
  });
});
