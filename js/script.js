/*포폴 스크립트*/
$(function () {

imagesProgress();
function imagesProgress () {
  var $container    = $('#loading'),            
      $progressBar  = $container.find('.progress-bar'), 
      $progressText = $container.find('.progress-text'), 

      imgLoad       = imagesLoaded('#wrap'),//이미지 로딩을 모니터링
      imgTotal      = imgLoad.images.length,//body 전체 이미지갯수
      imgLoaded     = 0,// 읽은 이미지갯수
      current       = 0,//현재 진행률 
      // 1 초에 60 번씩 읽어 여부 확인
      progressTimer = setInterval(updateProgress, 1000 / 60);

  // imagesLoaded를 통해 이미지로드 할 때마다 카운터증가
  imgLoad.on('progress', function () {
      imgLoaded++;
  });

  function updateProgress () {

    var target = (imgLoaded / imgTotal) * 100;// 로드한 이미지의 비율
    current += (target - current) * 0.1;//부드러운 여유
    $progressBar.css({ width: current + '%' });
    $progressText.text(Math.floor(current) + '%');

    if(current >= 100){
      clearInterval(progressTimer);
      $container.addClass('progress-complete');
      $progressBar.add($progressText) // add는 그룹화
        .delay(500)
        .animate({ opacity: 0 }, 250, function () {
        $container.animate({ top: '-100%' }, 1000, 'easeInOutQuint');
      });
    }
    if (current > 99.9) {
        current = 100;
    }
  }
}

});


$('#wrap').imagesLoaded(function() {    
    $('#loading').hide();  
    $('#wrap').fullpage();
});

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

$('.work7 #computer').click(function(){
    $('#modal').css("display","block");
    $('#modal .com').css("display","block");
});
$('.work7 #space').click(function(){
    $('#modal').css("display","block");
    $('#modal .spa').css("display","block");
});
$('.work7 #duck').click(function(){
    $('#modal').css("display","block");
    $('#modal .duc').css("display","block");
});

$('#modal span').click(function(){
    $('#modal').css("display","none");
    $('#modal div').css("display","none");    
});
    