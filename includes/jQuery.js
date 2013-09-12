$(document).ready(function(){

	$('nav').hide().height(0);
	$('#contentBg').hide().width(0);
	$('#content article .homeText').hide().height(0);
	$('.lightbox').hide();
	$('.text').hide();

	$(window).ready(function(){

		$('nav').show().animate({ height: "265px" }, 600);
		$('#contentBg').show().animate({ width: "767px" }, 600);
		$('#content article .homeText').show().delay(650).animate({ height: '280px' });
		$('.lightbox').delay(600).fadeIn();
		$('#storyOne .text').delay(600).slideDown(500);
	});

	$('.lightbox_trigger').click(function(event) {
		event.preventDefault();
		var image_href = $(this).attr("href");
		$(this).addClass('activeLightbox');

		$('#lightboxWrapper').append('<div class="lightboxImg"><div class="close"></div><div class="prev"></div><img src ="' + image_href + '" /><div class="next"></div></div>').fadeIn();
		
		$('.next').click(function(){
			var listItem = $(this).parent('li');
			var index = listItem.index();

			$('.lightboxImg').fadeOut()
			$('#lightboxWrapper').empty()

		});

		$('.prev').click(function(){
			
		});

		$('.close, #lightboxWrapper').click(function() {
      		$('#lightboxWrapper').fadeOut().empty();
    	});
	});

	$('.moreText').hover(function() {
		if ($(this).hasClass("open")) {
        	return
        }
        $(this).children('.colourLogos').stop().fadeToggle(200);
    });

    $('.moreText').click(function(event) {
        event.preventDefault();
        if ($(this).hasClass("open")) {
        	return
        }
        $(".open .colourLogos").show();
        $('.moreText').removeClass("open");
        $('.text').slideUp(500);
        $(this).next(".text").delay(500).slideDown(500);
        $(this).addClass("open");
    });

});