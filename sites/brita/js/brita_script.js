//브리타 스크립트

$(document).ready(function(){
    $('header nav .gnb li:nth-child(1)').click(function(){
        $('body,html').animate({
                scrollTop: 0 }, 800);
            return false;
    });
    $('header nav .gnb li:nth-child(2)').click(function(){
        $('body,html').animate({
                scrollTop: 980 }, 800);
            return false;
    });
    $('header nav .gnb li:nth-child(3)').click(function(){
        $('body,html').animate({
                scrollTop: 4400 }, 1500);
            return false;
    });
    $('header nav .gnb li:nth-child(4)').click(function(){
        $('body,html').animate({
                scrollTop: 5200 }, 1500);
            return false;
    });
    
    $(".sec01 .left .marella").animate({ 
            opacity: 1 , marginLeft: 0 }, 1000, "swing");
    $(".sec01 .left .brita").animate({ 
            opacity: 1}, 1000, "swing");
    
    $(".sec01 .right #cap").animate({ 
            top: 150}, 1000, "swing");
    $(".sec01 .right #filter").animate({ 
            top: 200}, 1000, "swing");
    $(".sec01 .right #basket , .sec01 .right #middle").animate({ 
            top: 320}, 1000, "swing");
    $(".sec01 .right #bottom").animate({ 
            top: 150}, 1000, "swing");
    $(".sec01 .right #bocover").animate({ 
            top: 413}, 1000, "swing");
    
   $(window).scroll(function () {
        var value = $(this).scrollTop();
       
       if(value > 130) {
            $(".sec01 .right #cap").animate({ 
            top: 300}, 1500, "swing");
            $(".sec01 .right #filter").animate({ 
            top: 330}, 1500, "swing");
            $(".sec01 .right #basket , .sec01 .right #middle").animate({ 
            top: 340}, 1500, "swing");
            $(".sec01 .right #bottom").animate({ 
            top: 80}, 1500, "swing");
            $(".sec01 .right #bocover").animate({ 
            top: 343}, 1500, "swing");
       }
       
       if(value > 300) {
           $(".sec02 .company img").animate({ 
            opacity: 1, marginLeft:275}, 1000, "swing");
       }
       
       if(value > 700) {
           $(".sec02 .watercup img").animate({ 
            opacity: 1, marginTop:0}, 1000, "swing");
       }
       
       if(value > 1700) {
           
       }
       
       if(value > 2200) {
           $(".sec04 h3").animate({ 
            opacity: 1}, 1300, "swing");
           $(".sec04 p").animate({ 
            opacity: 1}, 1300, "swing");
           $(".sec04 h1").animate({ 
            opacity: 1}, 1300, "swing");
       }
       
       if(value > 3000) {
           $(".sec05 h4").animate({ 
            opacity: 1, marginTop: 135}, 800, "swing");
       }
       
       if(value > 3300) {
           $(".sec05 .graph").animate({ 
            opacity: 1}, 800, "swing");
       }
       
       if(value > 3400) {
           $(".sec05 .many p:first-child").animate({ 
            opacity: 1}, 800, "swing");
           $(".sec05 .many p:last-child").animate({ 
            opacity: 1}, 800, "swing");
       }
       
       if(value > 4200) {
           $(".sec06 #usebrita").animate({ 
            opacity: 0}, 800, "swing");
       }
       
       if(value > 4700) {
           $(".sec07 .gna div").animate({ 
            opacity: 1, marginTop: 0}, 800, "swing");
       }
   });
    
    $('.top').click(function(){
        $('body,html').animate({
                scrollTop: 0 }, 800);
            return false;
    });
});