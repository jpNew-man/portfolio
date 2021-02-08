/*서브페이지 스크립트*/
$(document).ready(function() {
    $(function(){
			var cuPosition = parseInt($('nav').css("top"));
			$(window).scroll(function(){
				var value = $(window).scrollTop();
				$('nav').stop().animate({
					"top": value + cuPosition + "px"
				},600);
			});
		}); //메뉴
    
    $(window).on('mousewheel',function(e){
        var wheel = e.originalEvent.wheelDelta;
        var scrollTop = $(document).scrollTop();
        if(wheel<0){
            $('.gnb li span').hide();
        }else{
            $('.gnb li span').show();
        } return false;
    }); //
    
    $('nav').mouseover(function(){
        $('.gnb li span').show();
    });
    $('nav').mouseout(function(){
        $('.gnb li span').hide();
    });

    
    var slideCount = $('.slider li').length;
    var slideWidth = $('.slider li').width();
    var slideHeight = $('.slider li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('.slideroad').css({ width: slideWidth, height: slideHeight });
    
    $('.slider').css({ width: sliderUlWidth, marginLeft: - slideWidth });   
    
    
    $('.slider li:last-child').prependTo('.slider');

    function moveLeft() {
        $('.slider').animate({
            left: + slideWidth
        }, 500, function () {
            $('.slider li:last-child').prependTo('.slider');
            $('.slider').css('left', '');
        });
    };

    function moveRight() {
        $('.slider').animate({
            right: - slideWidth
        }, 500, function () {
            $('.slider li:first-child').appendTo('.slider');
            $('.slider').css('left', '');
        });
    };  
    

    $('.button .prev').click(function () {
        moveLeft();
    });

    $('.button .next').click(function () {
        moveRight();
    });

});    


