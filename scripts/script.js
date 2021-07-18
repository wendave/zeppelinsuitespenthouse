var $ = jQuery;

// header function
var headerScrolled = () => {
  // function checkScroll() {
  //   if ($(window).scrollTop() >= 50) {
  //     $(".header-main").addClass("header-scrolled");
  //   } else {
  //     $(".header-main").removeClass("header-scrolled");
  //   }
  // }
  
  // $(document).ready(function() {
  //   checkScroll();
  //   $(window).scroll(checkScroll);
  // });

  var navbarToggler = () => {
    $("#navbar_toggler").on("click", function () {
      var body = document.body;
      var headerMain = document.getElementById("header_main");
      var navbarMenu = document.getElementById("navbar_menu");
      
      body.classList.toggle("overflow-hidden");
      headerMain.classList.toggle("header-main-dark");
      navbarMenu.classList.toggle("navbar-menu-show");
    });
  }

  navbarToggler();
}

// swipers
var swipers = () => {
  var swiperHero = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".hero-swiper .swiper-button-next",
      prevEl: ".hero-swiper .swiper-button-prev",
    },
  });

  var swiperFeatured = new Swiper(".featured-swiper", {
    // slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".featured-swiper .swiper-button-next-custom",
      prevEl: ".featured-swiper .swiper-button-prev-custom",
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });

  var swiperFeaturedFoorplan = new Swiper(".featured-swiper-floorplan", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    allowTouchMove: false,
  });
}

// feature section with swiper thumbnails
var featured = () => {
  var featuredSection = document.getElementById("featured_section");
  if (featuredSection) {

    // on load, display the first thumbnail
    setTimeout(() => {
      $("#featured_section .swiper-slide-active .thumbnail-image").click();
    }, 100);

    setTimeout(() => {
      $("#featured_section").addClass("show");
    }, 500);

    $("#featured_swiper .thumbnail-image").each(function() {
      $(this).click(function() {
        var imageSrc = $(this).attr("src");
        var imageDescription = $(this).parent().find(".thumbnail-description").text();

        if (!$(this).hasClass("active")) {
          $(this).addClass("active");
          $("#featured_swiper .thumbnail-image").removeClass("active");
          $("#featured_wrapper").css("opacity","0");
          $(".featured-text").css("opacity","0");
          
          setTimeout(() => {
            $("#featured_image").attr("src", imageSrc);
            $("#featured_text p").text(imageDescription);
            $("#featured_wrapper").css("opacity","1");
            $(".featured-text").css("opacity","1");
          }, 500);
          $(this).addClass("active");
        }
      });
    });
  }
}

// initialize the functions
$(window).on("load", function() {
  headerScrolled();
  swipers();
  featured();
});