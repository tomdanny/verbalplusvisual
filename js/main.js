/* ======================================================
                      ARROW
   ====================================================== */

$(document).ready(function(){
   $(".arrow").click(function(){
      $('html, body').animate({
       scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
   });
});

