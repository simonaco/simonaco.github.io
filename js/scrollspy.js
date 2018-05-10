/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('.navbar').height() *4; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        $('.nav-link').css("color", "white");
    }else{
        $('.navbar').removeClass("scrolled");
        $('.nav-link').css("color","rgba(0,0,0,.5)");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}