/* Background slider */
$('.bxslider').bxSlider({
	auto: true,
	pager: false,
	controls: false,
	mode: 'fade',
	speed: 10000,
	onSlideBefore: function($slideElement){
		$('.tagline').fadeOut(2000,function(){
			var tagclass = $slideElement.data('tagclass');
			var tagtitle = $slideElement.data('tagtitle');
			var tagpara = $slideElement.data('tagpara');
			var tagspan = $slideElement.data('tagspan');
			$('.tagline h2').text(tagtitle);
			$('.tagline p').removeClass().addClass(tagclass).text(tagpara);	
			$('.tagline span').removeClass().addClass(tagclass).text(tagspan);	
			$('.tagline').fadeIn(6000);	
		});
	},
	onSliderLoad: function(currentIndex){
		var slideElement = $('.bxslider li:nth-of-type('+currentIndex+1+')');
		var tagclass = slideElement.data('tagclass');
		var tagtitle = slideElement.data('tagtitle');
		var tagpara = slideElement.data('tagpara');
		var tagspan = slideElement.data('tagspan');
		$('.tagline h2').text(tagtitle);
		$('.tagline p').removeClass().addClass(tagclass).text(tagpara);	
		$('.tagline span').removeClass().addClass(tagclass).text(tagspan);
	}
});

/* Mobile Slide Out Menu */
var count = 0;
$('.toggle-menu').click(function(){
	/* Check Mobile Menu Already Generated */
	if(count == 0){
		/* Generate Mobile Menu */
		$('.nav li').each(function(i) {
			var submenu = $(this).children('a').data('submenu');
			if(typeof submenu != "undefined" ){
				$(this).children('a').append('<i class="icon-down-dir"></i>');
				var data = $(submenu).children('.clearfix').html();
				$(this).children('a').after(data);
				$(this).find('.activearrow').remove();
				$(this).find('span').after('<i class="icon-down-dir"></i>');
			}
		});
		count += 1;
	}
	var leftval = $(".mainHeader nav").css('left');
	if(leftval == "0px") {
		$(".mainHeader nav").animate({  left: "-80%"  });  
	}
	else { 
		$(".mainHeader nav").animate({  left: "0px"  }); 
	}
});
