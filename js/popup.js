$(".popup-btn").click(function (e) {
  e.preventDefault();
  var href = $(this).attr("href");
  $(href).fadeIn(250);
  // $(href)
  //   .children$("popup-box")
  //   .removeClass("transform-out")
  //   .addClass("transform-in");
  // e.preventDefault();
});

$(".popup-close").click(function (e) {
  e.preventDefault();
  closeWindow();
});
$(".popup-close2").click(function (e) {
  e.preventDefault();
  closeWindow2();
});
$(".popup-close3").click(function (e) {
  e.preventDefault();
  closeWindow3();
});

function closeWindow() {
  $(".popup-wrap").fadeOut(200);
  $(".popup-box").removeClass("transform-in").addClass("transform-out");
}
function closeWindow2() {
  $(".popup-wrap2").fadeOut(200);
  $(".popup-box").removeClass("transform-in").addClass("transform-out");
}
function closeWindow3() {
  $(".popup-wrap3").fadeOut(200);
  $(".popup-box").removeClass("transform-in").addClass("transform-out");
}
