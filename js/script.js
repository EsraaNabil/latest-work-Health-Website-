  $(function(){

    $('.navbar-toggler-icon').click(function(){
        if($('.navContanier .navTwo').isBgColor('#32c69a') ){
            $('.navContanier .navTwo').attr('style', 'background-color: rgba(50,198,154,0.9) !important;height: 100vh !important;z-index:1;top:0px');
        }
        else{
            $('.navContanier .navTwo').attr('style', 'background-color: #32c69a !important');
        }        
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('.firstNav').offset().top; // pixels to the top of div1
        var ht = $('.firstNav').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht + 50){
            $('#myNav').addClass('fixed');
        }
        else{
        $('#myNav').removeClass('fixed');
        }
    });

    $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
        { 
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        { 
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }          
    ]
    });

    //jguery plugin for colors
    (function($) {
    $.fn.isBgColor = function(color) {
        var thisBgColor = this.eq(0).css('backgroundColor');
        var computedColor = $('<div/>').css({ 
            backgroundColor: color
        }).css('backgroundColor');
        return thisBgColor === computedColor;
    }
    })(jQuery);

    $('.tog').click(function(){
    if($(this).isBgColor('#ffff') ){
        $(this).css("backgroundColor","#32c69a");
        $(this).css("color","white");
        $($(this).find("span")).css("backgroundColor","black");
        $($(this).find("span")).html('<i class="fas fa-minus"></i>');
    }
    else{
        $(this).css("backgroundColor","white");
        $(this).css("color","#404040");
        $($(this).find("span")).css("backgroundColor","#32c69a");
        $($(this).find("span")).html('<i class="fas fa-plus"></i>');
    }
    });

    $('.counter').counterUp({
    delay: 3, // the delay time in ms
    time: 2000 // the speed time in ms
    });
    $('.counter1').counterUp({
    delay: 20, // the delay time in ms
    time: 3000 // the speed time in ms
    });
  });


