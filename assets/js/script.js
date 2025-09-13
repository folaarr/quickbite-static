// Nav Bar Toggle
document.querySelector("button#menu-button").addEventListener("click", function() {
    $("div#links-holder").slideToggle()
});

// Images Carousel Control
$(document).ready(function(){
  $("div#quickbite-carousel").slick({
    autoplay: true,
    mobileFirst: true,
    speed: 600,
  });
});

// Reviews Slick Carousel Control
$(document).ready(function(){
    $("div#reviews-carousel").slick({
        autoplay: false,
        mobileFirst: true,
        autoplaySpeed: 4500,
        speed: 900,
    });

    $(window).on('scroll', function() {
    let carouselTop = $('div#reviews-carousel').offset().top;
    let carouselHeight = $('div#reviews-carousel').outerHeight();
    let windowBottom = $(window).scrollTop() + $(window).height();

    // Check if carousel is in view
    if (windowBottom > carouselTop + carouselHeight / 2) {
      $('#reviews-carousel').slick('slickPlay');
    } else {
      $('#reviews-carousel').slick('slickPause');
    }
  });
});

// Highlight current page to the user when the Nav Bar is opened
document.addEventListener("DOMContentLoaded", () => {
  const pageTitle = document.querySelector('meta[name="page-title"]').getAttribute("content");
  const div = document.getElementById(pageTitle + "-hut")
  div.style.background = "#a9cf46";
  const link = document.getElementById(pageTitle + "-link")
  link.style.color = "#252525";
});
