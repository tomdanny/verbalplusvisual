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




/* ======================================================
                    SECOND IMAGE LOAD
   ====================================================== */


$(document).ready(function () {
        function showImages(el) {
        var windowHeight = jQuery( window ).height();
        $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 350 > thisPos ) {
                $(this).addClass("fadeIn");
            }
        });
    }

    // if the image in the window of browser when the page is loaded, show that image
    $(document).ready(function(){
            showImages('.star');
    });

    // if the image in the window of browser when scrolling the page, show that image
    $(window).scroll(function() {
            showImages('.star');
    });
  });




