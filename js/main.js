$(function() {
    $('.inviewfadeInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  
      var delay = $(this).attr("data-delay");
      if (isInView) {
        $(this).delay(delay).queue(function(){
          $(this).stop().addClass('fadeInUp');
        });
      } else {
      }
    });
  });
  
  