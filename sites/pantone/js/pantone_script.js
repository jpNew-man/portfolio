
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

    
    
    $('.sec02>div').mouseover(function(){
        $(this).find('.direct').fadeIn(0);
    });
    $('.sec02>div').mouseout(function(){
        $(this).find('.direct').fadeOut(0);
    });
    
    $('.sec03 .go').hide();
   
    $(window).resize(function(){
        if ($(window).width() > 720) {
            $('.sec03>div').hover(function(){
                $(this).find('.go').stop().fadeToggle();
            });
         }else {
            $('.sec03 .go').hide();
         }
    });

});