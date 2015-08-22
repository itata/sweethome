(function($) {
	 

    $('.slider').bxSlider({
        auto: true,
        mode: 'horizontal',
        infiniteLoop: true,
        responsive: true,
        speed: 1000,
        pager: false,
        controls: true,
        startSlide: 0,
        slideMargin: 0,
        pause: 6000, 
        touchEnabled: true,
        minSlides: 4,
        maxSlides: 5,
        slideWidth: 217,slideMargin: 10
    });
    
    
    $('a.link-archor[href^="#"]').click(function() 
      {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) 
        {

          var target = $(this.hash),
         
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) 
          {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            },1100, 'swing');
          }
        }
      });
        
    

	 

})(jQuery);