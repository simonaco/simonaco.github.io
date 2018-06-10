$(".cph-modal").hide();
$(".microsoft-build-modal").hide();

const cph = document.querySelector("circle.cph");
const microsoftbuild = document.querySelector("circle.microsoft-build");

$(".cph").hover(function(event) {
    var heightTop = $('.cph').offset().top;
    $(".cph-modal").show().css({ position: "absolute", top: heightTop, left: cph.getBoundingClientRect().x });
});

$(".microsoft-build").hover(function(event) {
    var heightTopMic = $('.microsoft-build').offset().top;
    $(".microsoft-build-modal").show().css({ position: "absolute", top: heightTopMic, left: microsoftbuild.getBoundingClientRect().x });
});


$(".close").on("click", function() {
    $(".microsoft-build-modal").css("display", "none");
});

$(".close").on("click", function() {
    $(".cph-modal").css("display", "none");
});