$(document).ready(function(){

    var nav = $("nav");
    var navoffset = $("nav").offset();

    $(window).scroll(function(){
        if ($(this).scrollTop() >= navoffset.top) {
            nav.css("position", "fixed").css("top", "0px").css("z-index", "99999").css("background", "#ffffff");
        } 
        else{
            nav.css("position", "absolute").css("top", "105px").css("background", "none");
        }
    });  
});
