$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 20,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
