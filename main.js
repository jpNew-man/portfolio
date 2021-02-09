//포트폴리오 메인 자바스크립트

$(document).ready(function () {

    //타이핑새로시작
    let target = document.querySelector("#type");
    let stringArr = ["LEE SU YEON"];
    let selectString

    function blink() {
        target.classList.toggle("active");
    }
    setInterval(blink, 500);

    //page2 quick_menu
    $(window).scroll(function () {
        var height = $(document).scrollTop(); //실시간으로 스크롤의 높이를 측정
        if (height > 1024) {
            $('.page2 .quick_menu').addClass('fix');
        } else if (height <  1023) {
            $('.page2 .quick_menu').removeClass('fix');
        }
    });


    //배너 창 오픈, 클로즈

    $(".page7 .event").hide();

    //이벤트1
    $(".page7 #plus").click(function () {
        $(".page7 .event1").show();
    });
    $(".page7 .close1").click(function () {
        $(".page7 .event1").hide();
    });

    //이벤트2
    $(".page7 #plus2").click(function () {
        $(".page7 .event2").show();
    });
    $(".page7 .close2").click(function () {
        $(".page7 .event2").hide();
    });

    //이벤트3
    $(".page7 #plus3").click(function () {
        $(".page7 .event3").show();
    });
    $(".page7 .close3").click(function () {
        $(".page7 .event3").hide();
    });

    //이벤트4
    $(".page7 #plus4").click(function () {
        $(".page7 .event4").show();
    });
    $(".page7 .close4").click(function () {
        $(".page7 .event4").hide();
    });

    //page8 ICON DESIGN
    $(".icon").hide();
    $(".icon1").show();
    $(".box1").click(function () {
        $(".box p").removeClass("on");
        $(".box1 p").addClass("on");
        $(".box span").removeClass("on2");
        $(".box1 span").addClass("on2");
        $(".icon").hide(100);
        $(".icon1").show(400);
    });
    $(".box2").click(function () {
        $(".box p").removeClass("on");
        $(".box2 p").addClass("on");
        $(".box span").removeClass("on2");
        $(".box2 span").addClass("on2");
        $(".icon").hide(100);
        $(".icon2").show(400);
    });
    $(".box3").click(function () {
        $(".box p").removeClass("on");
        $(".box3 p").addClass("on");
        $(".box span").removeClass("on2");
        $(".box3 span").addClass("on2");
        $(".icon").hide(100);
        $(".icon3").show(400);
    });
    
    //클릭시 스크롤 이동
    $('.list1').bind('click', function() {
              $('html, body').animate({scrollTop: '980px'}, 680);
      });
    $('.list2').bind('click', function() {
              $('html, body').animate({scrollTop: '1960px'}, 680);
      });
    $('.list3').bind('click', function() {
              $('html, body').animate({scrollTop: '2940px'}, 680);
      });
    $('.list4').bind('click', function() {
              $('html, body').animate({scrollTop: '3920px'}, 680);
      });
    $('.list5').bind('click', function() {
              $('html, body').animate({scrollTop: '4900px'}, 680);
      });
    $('.list6').bind('click', function() {
              $('html, body').animate({scrollTop: '5880px'}, 680);
      });
    $('.list7').bind('click', function() {
              $('html, body').animate({scrollTop: '6860px'}, 680);
      });


    //a태그 눌렀을시 무시

    $('a[href="#"]').click(function (ignore) {
        ignore.preventDefault();
    });

    //새로고침시 상단으로 이동
    window.onload = function () {
        setTimeout(function () {
            scrollTo(0, 0);
        }, 100);
    }

});

//클립

$(function () {
    $('.ecretage').hover(function () {
        $('#cercle2').css('transform', 'translatey(50px)');
        $('#cercle1').css('transform', 'translatey(-50px)');
        $('#rectangle').css({
            "height": "100",
            "transform": "translatey(-50px)"
        });
    }, function () {
        // on mouseout
        $('#cercle2').css('transform', 'translatey(0px)');
        $('#cercle1').css('transform', 'translatey(0px)');
        $('#rectangle').css({
            "height": "1",
            "transform": "translatey(0px)"
        });
    });
});

//클립2

$(function () {
    $('.ecretage2').hover(function () {
        $('#cercle4').css('transform', 'translatey(50px)');
        $('#cercle3').css('transform', 'translatey(-50px)');
        $('#rectangle2').css({
            "height": "100",
            "transform": "translatey(-50px)"
        });
    }, function () {
        // on mouseout
        $('#cercle4').css('transform', 'translatey(0px)');
        $('#cercle3').css('transform', 'translatey(0px)');
        $('#rectangle2').css({
            "height": "1",
            "transform": "translatey(0px)"
        });
    });
});

//클립3

$(function () {
    $('.ecretage3').hover(function () {
        $('#cercle6').css('transform', 'translatey(50px)');
        $('#cercle5').css('transform', 'translatey(-50px)');
        $('#rectangle3').css({
            "height": "100",
            "transform": "translatey(-50px)"
        });
    }, function () {
        // on mouseout
        $('#cercle6').css('transform', 'translatey(0px)');
        $('#cercle5').css('transform', 'translatey(0px)');
        $('#rectangle3').css({
            "height": "1",
            "transform": "translatey(0px)"
        });
    });
});

//클립4

$(function () {
    $('.ecretage4').hover(function () {
        $('#cercle8').css('transform', 'translatey(50px)');
        $('#cercle7').css('transform', 'translatey(-50px)');
        $('#rectangle4').css({
            "height": "100",
            "transform": "translatey(-50px)"
        });
    }, function () {
        // on mouseout
        $('#cercle8').css('transform', 'translatey(0px)');
        $('#cercle7').css('transform', 'translatey(0px)');
        $('#rectangle4').css({
            "height": "1",
            "transform": "translatey(0px)"
        });
    });
});
