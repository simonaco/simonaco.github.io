var conf = $("svg.svg > *");

conf.on("click", function() {
  
  conf.removeClass("on");
  $(this).addClass("on");
  $("#Create").toggle();

});