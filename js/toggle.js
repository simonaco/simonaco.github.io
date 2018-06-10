$(".cph-modal").hide();
$(".microsoft-build-modal").hide();
$(".uphill-modal").hide();
$(".codestar-meetup-modal").hide();

const cph = document.querySelector("circle.cph");
const microsoftbuild = document.querySelector("circle.microsoft-build");
const uphill = document.querySelector("circle.uphill");
const codestarmeetup = document.querySelector("circle.codestar-meetup");

$(".cph").hover(function(event) {
    var heightTop = $('.cph').offset().top;
    $(".cph-modal").show().css({ position: "absolute", top: heightTop, left: cph.getBoundingClientRect().x });
});

$(".microsoft-build").hover(function(event) {
    var heightTop = $('.microsoft-build').offset().top;
    $(".microsoft-build-modal").show().css({ position: "absolute", top: heightTop, left: microsoftbuild.getBoundingClientRect().x });
});

$(".uphill").hover(function(event) {
    var heightTop = $('.uphill').offset().top;
    $(".uphill-modal").show().css({ position: "absolute", top: heightTop, left: uphill.getBoundingClientRect().x });
});

$(".codestar-meetup").hover(function(event) {
    var heightTop = $('.codestar-meetup').offset().top;
    $(".codestar-meetup-modal").show().css({ position: "absolute", top: heightTop, left: codestarmeetup.getBoundingClientRect().x });
});


$(".close").on("click", function() {
    $(".microsoft-build-modal").css("display", "none");
    $(".cph-modal").css("display", "none");
    $(".uphill-modal").css("display", "none");
    $(".codestar-meetup-modal").css("display", "none");
});


$(".frontend").click(function() {
    $(".codestar-body").css("display", "none");
    $(".frontendunite-body").fadeIn();       
});

$(".codestar").click(function() {
    $(".frontendunite-body").css("display", "none");
    $(".codestar-body").fadeIn();       
});

