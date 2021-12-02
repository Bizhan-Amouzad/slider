$(document).ready(function () {
  //   get slider li width
  const slideWidth = $("#slider ul li").width();
  const ulWidth = $("#slider ul").width();
  $("#slider ").css("width", ulWidth);
  // ul width function
  function ulWidthFunc() {
    const sliderRoot = $(".slide-root").width();
    let ulWidth = Math.floor(sliderRoot / 211) * 211;
    $("#slider ul").css("width", ulWidth);
    let ulMargin = (sliderRoot - ulWidth) / 2;
    $("#slider ul").css("margin-left", ulMargin);
  }
  ulWidthFunc();
  // window resize set ul width
  $(window).resize(function () {
    ulWidthFunc();
    console.log("resize");
  });
  // previous slide
  var prevSlide = function () {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      250,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "0");
      }
    );
  };

  // next slide
  var nextSlide = function () {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      250,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "0");
      }
    );
  };
  // next slide button
  $(".control_next").click(function () {
    setTimeout(nextSlide, 250);
  });
  $(".control_prv").click(function () {
    setTimeout(prevSlide, 250);
  });
});
