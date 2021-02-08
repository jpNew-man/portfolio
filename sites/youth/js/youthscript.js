/*온라인청년센터 모작 스크립트*/

$(document).ready(function(){
    //메인메뉴 호버시 다운
    $('.gnb>li').hover(function(){
        $('.lnb').stop().slideToggle();
    });
    $('.all_menu').click(function(){
        $('.lnb').slideToggle();
    });    
    //청년정책 리스트 클릭
    /*$('.policylist .list>li').click(function(){
        $(this).addClass("active_on");
        $('.policylist .list>li').not(this).removeClass("active_on");
    });*/
    //청년정책 리스트 호버
    $('.pol1 li:first-child').addClass("active");
    $('.polslider>ul>li').mouseover(function(){
        $(this).addClass("active");
        $('.polslider>ul>li').not(this).removeClass("active");
    }).mouseout(function(){
        $(this).removeClass("active");
    });
    //공간지도 탭메뉴    
    $('.s_search .tab2>div').hide();
    $('.s_search .tab1>span').click(function(){
        $('.s_search .tab1>span').addClass('btn_active');
        $('.s_search .tab2>span').removeClass('btn_active');
        $('.tab1>div').show();
        $('.tab2>div').hide();
    });
    $('.s_search .tab2>span').click(function(){
        $('.s_search .tab2>span').addClass('btn_active');
        $('.s_search .tab1>span').removeClass('btn_active');
        $('.tab2>div').show();
        $('.tab1>div').hide();
    });
    //스크롤탑
    $('.to_top').click(function(){
        $('html, body').animate({scrollTop : 0}, 400);
    });
    
    $(".slider").slick({
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 1000,
		infinite: true,
		arrows: true,
		dots: false,
        prevArrow: $('.con1 .con1prev'),
        nextArrow: $('.con1 .con1next')
	});
    $(".polslider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: true,
        prevArrow: $('.con2prev'),
        nextArrow: $('.con2next'),
		adaptiveHeight:true,
		asNavFor: '.policylist .list'
	});

	$(".polslider ul li").eq(0).find("a").addClass("active_on")
	$(".policylist .polslider").on("afterChange", function(event, slick, currentSlide, nextSlide){
		$(".polslider.slick-active ul li").eq(0).find("a").addClass("active_on")
	});

	$(".policylist .list").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		asNavFor: '.policylist .polslider',
		focusOnSelect: true
	});
    
    $(".goslider").slick({
		autoplay: true,
		autoplaySpeed: 3500,
		speed: 1000,
		infinite: true,
		arrows: true,
		dots: true,
        prevArrow: $('.con3prev'),
        nextArrow: $('.con3next')
	});
    
    $('.btn_play').on('click', function() {
    $('.goslider')
        .slick('slickPlay')
    });
    
    $('.btn_stop').on('click', function() {
    $('.goslider')
        .slick('slickPause')
    });
    
    
    /*$(".con1 .slick-dots, .con3 .slick-dots, .con4 .slick-dots").wrap("<div class=\"dots_wrap\">");
	$(".dots_wrap").append("<button type=\"button\" class=\"btn_play\" onclick=\"SliderPlay(this);\"><span class=\"blind\">재생</button>");
	$(".dots_wrap").append("<button type=\"button\" class=\"btn_stop\" onclick=\"SliderStop(this);\"><span class=\"blind\">정지</button>");*/
});