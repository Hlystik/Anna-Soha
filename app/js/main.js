$(function () {

    $('.menu__hamburger').on('click', function () {
        $('.menu__hamburger').toggleClass('menu__hamburger--active');
        $('.menu__list').toggleClass('menu__list--active');    
    });

    $('.course-review__slider').slick({
        dots: false,
        arrows: true,
        fade: true,
        autoplay: true,
        prevArrow: '<button type="button" class="course-review__slider-arrow course-review__slider-arrowleft"><img src="images/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="course-review__slider-arrow course-review__slider-arrowright"><img src="images/arrow-next.svg"></button>',
        responsive: [
            {
                breakpoint: 1675,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.tariffs__slider').slick({
        dots: false,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $( window ).on('resize', function() {
        if ($(window).width() <= '1263'){
            $('.teacher__info-text').appendTo('.teacher__wrapper');
        } else {
            $('.teacher__info-text').appendTo('.teacher__info');
        }
    });

    $( window ).on('resize', function() {
        if ($(window).width() <= '767'){
            $('.container-header').addClass('container-header--ignore');
        } else {
            $('.container-header').removeClass('container-header--ignore');
        }
    });        
})