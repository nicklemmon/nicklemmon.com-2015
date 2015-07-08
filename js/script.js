$( document ).ready(function() {

    /*===== functions for section.portfolio to bring in detailed view of each .work-item =====*/
    $(".work-item").click(function() {
        $(".work-focus").removeClass("remove");
        $(".work-container").addClass("remove");
        $(".work-focus").addClass("slide");
    });
    
    $(".return").click(function() {
        $(".work-focus").removeClass("slide");
        $(".work-focus").addClass("remove");
        $(".work-container").removeClass("remove");
    });
    
    /*===== functions for section.resume to 'open' each resume skill and display the <dd> =====*/
    $(".definition").click(function(){
        
        var dd = $(this).children("dd");
        
        if (  !(dd.hasClass("show"))  ) { /* if the <dd> element does NOT have a class of .show... */
            dd.addClass("show"); /* ...then add a class of .show... */
            $(this).children("dt").removeClass("right-spin"); /* ...and remove a class of .right-spin if it's there... */
            $(this).children("dt").addClass("left-spin"); /* ...and add a class of .left-spin to the <dt> element */
        }
        
        else { /* if the <dd> element DOES have a class of .show... */
            dd.removeClass("show"); /* ...then remove a class of .show... */
            $(this).children("dt").removeClass("left-spin"); /* ...and also remove the class of .left-spin from the <dt> element... */
            $(this).children("dt").addClass("right-spin"); /* ...and add a class of .right-spin */
        }
        
    });
    
    
    
    /*===== smooth scrolling function from https://css-tricks.com/snippets/jquery/smooth-scrolling/ =====*/
    $('a[href*=#]:not([href=#])').click(function() { 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
          }
        }
    });
    
});