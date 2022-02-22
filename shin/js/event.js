$(function(){
    var eventBanner = $('#eventBanner');

    var eventSlide = eventBanner.find('.promotion-wrap');

    eventSlide.not('.slick-initialized').slick({
        slidesToShow: 3.43,
        slidesToScroll: 1,
        dots:true,
        autoplay:false,
        infinite:false,
    });
});