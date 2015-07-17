$( document ).ready(function() {
	
	/*===== function for section.about tabs =====*/	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	/*===== function to load content in to .work-focus when clicking on each .work-item thumbnail ======*/ 
	$.ajaxSetup({ cache: true });

	$(".work-item-unit").click(function() {
		var worknum = $(this).attr("data-worknum"); /* declares variable that stores the data for the 'data-worknum' attribute... */
        //var spinner = '<div class="loader">Loading...</div>';
        
		$(".work-focus-content").load("_includes/portfolio/work-focus-" + worknum + ".html"); /* ...which is then used to dynamically load the appropriate content */
	});

    /*===== function for section.portfolio to bring in detailed view of each .work-item =====*/
    $(".work-item-unit").click(function() { /* when the user clicks on a .work-item... */
        $(".work-focus").removeClass("remove"); /* ...remove the class .remove from .work-focus... */
        $(".work-container").addClass("remove"); /* ...add the class .remove to .work-container... */
        $(".work-focus").addClass("slide"); /* ...and finally ad the class .slide to .work-focus */
    });
    $(".return").click(function() { /* when the user clicks on .return... */
        
        var target = $(this).attr("id");
        
        $(".work-focus").removeClass("slide"); /* ...remove the class .slide from .work-focus... */
        $(".work-focus").addClass("remove"); /* ...add the class .remove to .work-focus... */
        $(".work-container").delay(100).queue(function() {
                                                $(this).removeClass("remove");
                                                $(this).dequeue();
                                               });  /* ...and remove the class .remove from .work-container */
    });
    
    /*===== function for section.skills to 'open' each skills skill and display the <dd> =====*/
    $(".definition").click(function(){
        var dd = $(this).children("dd");
        if (  !(dd.hasClass("show"))  ) { /* if the <dd> element does NOT have a class of .show... */
            dd.addClass("show"); /* ...then add a class of .show... */
            //$(this).children("dt").addClass("pulse"); /* ...and add a class of .pulse to the <dt> element */
        }
        else { /* if the <dd> element DOES have a class of .show... */
            dd.removeClass("show"); /* ...then remove a class of .show... */
            //$(this).children("dt").removeClass("pulse"); /* ...and remove a class of .pulse */
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
        }, 800);
        return false;
          }
        }
    });
    
});