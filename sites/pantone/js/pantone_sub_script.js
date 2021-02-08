//팬톤 서브스크립트

$(document).ready(function(){
     $('.gnb>li').hover(function(){
        $(this).find('.lnb,.lnb2').stop().slideToggle();
    });
    
    $('.burger').click(function(){
        $('.burger .open').hide();
        $('.burger .close').show();
        
        if($('.nav_m').is(":visible")){
            $('.nav_m').slideUp();  
            $('.burger .open').show();
            $('.burger .close').hide();
        }
        else {
            $('.nav_m').slideDown();
        }
        
    });
    
    $('.gnb_m>li:first').click(function(){
        $(this).children('.lnb_m').slideDown();
    });
    $('.gnb_m>li:first>.lnb_m>li').click(function(){
        if($('.gnb_m>li:first>.lnb_m>li>.lnb2_m').is(":visible")){
            $(this).children('.lnb2_m').slideUp();
        }
        else {
            $(this).children('.lnb2_m').slideDown();
        }
            
    });
    
   
    $('.gnb_m>li').not('.gnb_m>li:first').click(function(){
        //$(this).children('.lnb2_m').slideDown();
        if($(this).find('.lnb2_m').is(":visible")){
            $(this).find('.lnb2_m').slideUp();
        }
        else if($('.gnb_m>li:first>.lnb_m>li').is(":visible")){
            $('.gnb_m>li:first>.lnb_m>li').slideUp();
        }
        else{
            $(this).children('.lnb2_m').slideDown();
        }
    });
    
    
    $('.sec03>span>div').mouseover(function(){
        $(this).css("opacity","0.6");
        $(this).children().css("color","#fff");
    });
    $('.sec03>span>div').mouseout(function(){
        $(this).css("opacity","1");
        $(this).children().css("color","#000");
    });
    
    $('.sec04>span>p:nth-child(1)').hover(function(){
		$('.sec04 #part1').fadeToggle();
	});
    $('.sec04>span>p:nth-child(2)').hover(function(){
		$('.sec04 #part2').fadeToggle();
	});
    $('.sec04>span>p:nth-child(3)').hover(function(){
		$('.sec04 #part3').fadeToggle();
	});
    $('.sec04>span>p:nth-child(4)').hover(function(){
		$('.sec04 #part4').fadeToggle();
	});
    $('.sec04>span>p:nth-child(5)').hover(function(){
		$('.sec04 #part5').fadeToggle();
	});
    $('.sec04>span>p:nth-child(6)').hover(function(){
		$('.sec04 #part6').fadeToggle();
	});
    
});