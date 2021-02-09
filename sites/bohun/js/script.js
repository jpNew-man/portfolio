$(document).ready(function(){    
    $(".menu>li, .downbox").hover(function(){
       $(".sub, .downbox").stop().slideToggle(); 
    });
    
    $('.slider').bxSlider({
        auto: true
    })
    
    $(".gallery2 li:first").siblings().hide();

    setInterval(function(){
        $(".gallery2 li:first").fadeOut(1000).next().fadeIn(1000).end().appendTo(".gallery ul");
    },5000);
    
	
	$('.close').click(function(){
		$('#modal').hide();
    });

	$('#kklc').click(function(){
		$('#modal').show();
	});
	
	$('.close_quick').click(function(){
		$('#modal_quick').hide();
    });

	$('.followme').click(function(){
		$('#modal_quick').show();
	});
	

    $('.see>li').mouseover(function(){
        $(this).siblings().css("background-color", "#bbb");   
	});
    
    $('.see>li').mouseout(function(){
        $('.see>li').css("background-color", "white");   
	});
});