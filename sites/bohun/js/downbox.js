$(document).ready(function(){

    var downbox = $(".downbox");
    var downboxoffset = $(".downbox").offset();

    $(window).scroll(function(){
        if ($(this).scrollTop() >= 150) {
            downbox.css("position", "fixed").css("top", "50px").css("z-index", "9998");
        } 
        else{
            downbox.css("position", "absolute").css("top", "100%");
        }
		
		return false;
    });    
});
    