function elevetorActivity(e){
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

	$(document).ready(function(){

		$(".eleActive").hide();
		$body.animate({ scrollTop: 0 },1);

		calcPos();
	});

	$(window).resize(function(){ calcPos(); });

	//click event
	$(".eleActive ul li").find("a").click(function(){
		var atPos = $(this).attr("href").split("#").pop();
		scroll(atPos);
	});


	$(window).scroll(function(){
		var $top = $(window).scrollTop();
		var level1 = $('.cate01').offset().top,
			level2 = $('.cate02').offset().top,
			level3 = $('.cate03').offset().top,
			level4 = $('.cate04').offset().top,
			level5 = $('.cate05').offset().top,
			level6 = $('.cate06').offset().top,
			level7 = $('.cate07').offset().top,
			level8 = $('.cate08').offset().top,
			level9 = $('.cate09').offset().top,
			level10 = $('.cate10').offset().top;

		if($top < level1) {
		  $(".eleActive").fadeOut("fast");
		}else if($top >= level1){
			$(".eleActive").fadeIn("fast");
			$(".eleActive li").eq(1).addClass("active").siblings("li").removeClass("active");
		}

		if($top >= level2) {
			$(".eleActive li").eq(2).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level3){
			$(".eleActive li").eq(3).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level4){
			$(".eleActive li").eq(4).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level5){
			$(".eleActive li").eq(5).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level6){
			$(".eleActive li").eq(6).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level7){
			$(".eleActive li").eq(7).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level8){
			$(".eleActive li").eq(8).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level9){
			$(".eleActive li").eq(9).addClass("active").siblings("li").removeClass("active");
		}
		if($top >= level10){
			$(".eleActive li").eq(10).addClass("active").siblings("li").removeClass("active");
		}
	});

	//計算位置
	function calcPos(){

		var eHeight = $(".eleActive").height();
		$(".eleActive").css({
			'position': 'fixed',
			'z-index': 99,
			'top': '50%',
			'margin-top': '-'+(eHeight/2)+'px'
		});
	}

	//滾動位置計算
	function scroll(e){
		var $BodyHeight = $(document).height();
		var $viewportHeight = $(window).height();
		var $endPos = $BodyHeight - $viewportHeight;

		if(e == "top"){
			$body.animate({ scrollTop: 0 },1500);
		}else if(e == "end") {
			$body.animate({ scrollTop: $endPos },1500);
		}else{
			$body.stop(true,true).animate({
				scrollTop: $('.' + e ).offset().top
			},1500);
		}

	}

}
