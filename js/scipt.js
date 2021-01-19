$(document).ready(function () {
  // jQuery code

  $("[data-trigger]").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id = $(this).attr("data-trigger");
    $(offcanvas_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
  });

  // Close menu when pressing ESC
  $(document).on("keydown", function (event) {
    if (event.keyCode === 27) {
      $(".mobile-offcanvas").removeClass("show");
      $("body").removeClass("overlay-active");
    }
  });

  $(".btn-close, .screen-overlay").click(function (e) {
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });
  //   changing the navbar
  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 200);
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scroll__up__button").fadeIn();
    } else {
      $("#scroll__up__button").fadeOut();
    }
  });

  $("#scroll__up__button").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 200);
  });
});
//

// for testominals
