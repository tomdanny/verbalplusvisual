/* ======================================================
                      ARROW
   ====================================================== */

$(document).ready(function(){
   $(".arrow").click(function(e){
      e.preventDefault();
      $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
   });
});



/* ======================================================
                      NAVBAR
   ====================================================== */

   $(document).ready(function(){
     $(window).bind('scroll', function() {
     var navHeight = $( window ).height() - 50;
       if ($(window).scrollTop() > navHeight) {
         $('nav').addClass('fixed');
       }
       else {
         $('nav').removeClass('fixed');
       }
    });
  });


  $(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
  });


$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    // $('html, body').toggleClass("toggleScroll");
});