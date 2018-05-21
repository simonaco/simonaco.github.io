$(document).ready(function() {
    var divHeight = $(window).height(); 
    $('.custom-height').css('min-height', divHeight+'px');
    var divWidth = $(window).width(); 
    $('.custom-width').css('max-width', divHeight+'px');
});  