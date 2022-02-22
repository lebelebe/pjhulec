$(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var target = $("#gnb").height();
        console.log(target);

        if( scrollTop >  target ){
            $('.pageTop').addClass('on');
        }
        else{
            $('.pageTop').removeClass('on');
        }
    });
});