var quickBox = $('.quick_menu'); //퀵메뉴 코딩한 div의 클래스 네임 - 자신의 이름에 맞게 수정하세요
var quick_top = 140; // 기준이 되는 높이 값입니다. 수정해서 테스트 해보시면 감이 오실꺼에요.
quickBox.css('top', $(window).height());
$(document).ready(function () {
    quickBox.animate({
        "top": $(document).scrollTop() + quick_top + "px"
    }, 500); //숫자값을 변경하시면 속도변화
    $(window).scroll(function () {
        quickBox.stop();
        quickBox.animate({
            "top": $(document).scrollTop() + quick_top + "px"
        }, 500); //숫자값을 변경하시면 속도변화
    });
});
