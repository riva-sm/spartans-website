$(document).ready(function () {
  /* burger menu */
  $(".nav-icon").click(function () {
    $(".full-nav").addClass("open");
  });
  $(".nav-close").click(function () {
    $(".full-nav").removeClass("open");
  });
  /* sticky nav */
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });

  /* Testimonials slider */
  $(".testimonials-wrapper").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
