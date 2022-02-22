(function($){ 
	$(window).load(function(){
		img_event();
		$(window).scroll(function(e){
			var s = $(window).scrollTop();
			if(s>50){
				img_event();
			}
		})
		function img_event(){
			$(".img-ani").each(function(){
				var w_t = $(window).scrollTop() + $(window).height();
				var i_t = $(this).offset().top;
				if(w_t > i_t){
					$(this).addClass("img-aniload");
				}else{
					$(this).removeClass("img-aniload");
				}
			})
		}
	})
})( jQuery);