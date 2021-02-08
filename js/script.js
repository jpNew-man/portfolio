/*포폴 스크립트*/

$('#wrap').fullpage();

$('.sec4 #contact #call p:nth-child(1)').click(function(){
    $('.sec4 #contact #call p:nth-child(2)').slideToggle().animate({
        marginTop: 0,
        opacity: 1
    });
});


$('.sec3 .work7 #computer').mouseover(function(){
    $(this).children('.up').stop().animate({bottom:0});
});
$('.sec3 .work7 #computer').mouseout(function(){
    $(this).children('.up').stop().animate({bottom:-120});
});
$('.sec3 .work7 #space').mouseover(function(){
    $(this).children('.up').stop().animate({bottom:0});
});
$('.sec3 .work7 #space').mouseout(function(){
    $(this).children('.up').stop().animate({bottom:-120});
});
$('.sec3 .work7 #duck').mouseover(function(){
    $(this).children('.up').stop().animate({bottom:0});
});
$('.sec3 .work7 #duck').mouseout(function(){
    $(this).children('.up').stop().animate({bottom:-120});
});