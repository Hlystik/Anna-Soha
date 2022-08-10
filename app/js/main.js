$(function () {

    $('.course-review__slider').slick({
        dots: false,
        arrows: true,
        fade: true,
        autoplay: true,
        prevArrow: '<button type="button" class="course-review__slider-arrow course-review__slider-arrowleft"><img src="images/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="course-review__slider-arrow course-review__slider-arrowright"><img src="images/arrow-next.svg"></button>'
    });
    $('.tariffs__slider').slick({
        dots: false,
        arrows: false,
        fade: true,
        autoplay: true
    });
})