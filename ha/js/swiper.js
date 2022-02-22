$(function (){  
    var swiperboard = new Swiper(".swiper-board-main", { 
        slidesPerView: 1,
        spaceBetween: 0,
        effect : 'fade' ,
        loop:true,
        centeredSlides: true, 
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".board-button-next",
            prevEl: ".board-button-prev",
        }, 
        pagination: {
        
            el:'.board-main .swiper-pagination',
            clickable:true, 
            
            /*
            
            renderBullet:function(index, className){
                return '<a class="' + className + '">0'+(index + 1)+'</a>';
            },
            */
            type: 'custom',
            renderCustom:function(swiper, current, total){ 
                return '<a class="swiper-pagination-bullet">01</a> <a class="swiper-pagination-bullet">0'+(total)+'</a>';
            },

            // el:'.board-main .swiper-pagination',
            // clickable:true,
            // renderBullet:function(index, className){
            //   var pnText=$('.swiper-board-main .swiper-slide').eq(index+1).find('dt>a').text() ;
            //   return '<a class="' + className + '"><b>'+pnText+'</b><span><i></i></span></a>';  
            // },
        }, 
        on:{
        init:function(){   
            var contHtml = $('.swiper-board-main .swiper-slide-active').find('.swiper-contents').html();
            $('.load-contents').html(contHtml); 
                $('.board-main .space-swiper-pn>i').removeClass('progressing') ;
        },
        slideChangeTransitionStart: function(e){     
        $('.board-main .space-swiper-pn>i').removeClass('progressing') ;
        var pn = e.realIndex + 1 ; 
        $('.board-main .swiper-pagination a').eq(0).text("0"+pn ) ;  

        if( (e.slides.length - 2) ==  pn) {
            $('.board-main .swiper-pagination a').eq(1).addClass('swiper-pagination-bullet-active');
        } else {
            $('.board-main .swiper-pagination a').eq(1).removeClass('swiper-pagination-bullet-active');
        }
        },
        slideChangeTransitionEnd: function(){   
            var contHtml = $('.swiper-board-main .swiper-slide-active').find('.swiper-contents').html();
            $('.load-contents').html(contHtml);
        
                setTimeout(function(){
                    $('.board-main .space-swiper-pn>i').addClass('progressing') ; 
                },500);
        },
        },

    });
});