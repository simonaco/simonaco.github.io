if ($(window).width() < 1890) {
   $('link[rel=stylesheet][href~="css/animation.css"]').remove();
   $("#changeImage").attr("src","img/banner-simona2.png");
   $(".animated-name").remove();
   $(".animated-surname").remove();
   $(".animation-from-left").remove();
   $(".animation-from-right").remove();
}


