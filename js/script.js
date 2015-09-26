$( document ).ready(function() {

		/*===== function for section.about tabs =====*/
		$('ul.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#" + tab_id).addClass('current');
		});

		/*===== image preloading for icons in the section.about tabs =====*/
		$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
		}

		$(['/images/icons/portfolio-white.svg','/images/icons/resume-white.svg']).preload();

		/*===== function to load content in to .work-focus when clicking on each .work-item thumbnail ======*/
		$.ajaxSetup({ cache: true });

		$(".work-item-unit").click(function() {
			var worknum = $(this).attr("data-worknum"); /* declares variable that stores the data for the 'data-worknum' attribute... */
			//history.pushState({state:worknum}, worknum, worknum); /* ...and changes the path to /worknum for each portfolio item... */

			$(".work-focus-content").delay(0).queue(function() {
				$(this).load("_includes/portfolio/work-focus-" + worknum + ".html"); /* ...which is then used to dynamically load the appropriate content */
				$(this).dequeue();
			})

		});

    /*===== function for section.portfolio to bring in detailed view of each .work-item =====*/
    $(".work-item-unit").click(function() { /* when the user clicks on a .work-item... */
        $(".work-focus").removeClass("remove"); /* ...remove the class .remove from .work-focus... */
        $(".work-container").addClass("remove"); /* ...add the class .remove to .work-container... */
        $(".work-focus").addClass("slide"); /* ...and finally ad the class .slide to .work-focus */
    });

		/*===== function to return to the page when finished viewing the detailed view for each portfolio item =====*/
    $(".return").click(function() { /* when the user clicks on .return... */

        $(".work-focus").removeClass("slide"); /* ...remove the class .slide from .work-focus... */
				history.pushState({state: ""}, "", ""); /* ...and changes the path to /for each portfolio item... */
        $(".work-focus").addClass("remove"); /* ...add the class .remove to .work-focus... */
        $(".work-container").delay(400).queue(function() {
          $(this).removeClass("remove"); /* ...removes the class .remove... */
          $(this).dequeue();
         });

    });

    /*===== function for section.skills to 'open' each skills skill and display the <dd> =====*/
    $(".definition").click(function(){
        var dd = $(this).children("dd");
        if (  !(dd.hasClass("show"))  ) { /* if the <dd> element does NOT have a class of .show... */
            dd.addClass("show"); /* ...then add a class of .show... */
        }
        else { /* if the <dd> element DOES have a class of .show... */
            dd.removeClass("show"); /* ...then remove a class of .show... */
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
