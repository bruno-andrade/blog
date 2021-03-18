$(document).ready(function(){
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><div class="circle"><img src="icons/arrow-left.svg"></div></button>',
        nextArrow: '<button type="button" class="slick-next"><div class="circle"><img src="icons/arrow-right.svg"></div></button>',
        responsive: [
            {
                breakpoint: 1400,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3
                    }
            },
            {
                breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2
                    }
            },
            {    
            breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
            breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
            breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
        
    });
    function squareSize() {
        var cw = $('.carousel-item').width();
        $('.carousel-item').css({'height':cw+'px'});
    }
    squareSize();    
    $(window).resize(function () {
        waitForFinalEvent(function(){
            squareSize();
        }, 500, "some unique string");
    });

    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();
});
