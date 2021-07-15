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
    document.getElementById("navbar_toggler").addEventListener("click", function () {
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
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    // pagination: {
    //   el: ".hero-swiper .swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".hero-swiper .swiper-button-next",
      prevEl: ".hero-swiper .swiper-button-prev",
    },
  });

  var swiperFeatured = new Swiper(".featured-swiper", {
    // slidesPerView: 4,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".featured-swiper .swiper-pagination",
    //   clickable: true,
    // },
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
}

// feature section with swiper thumbnails
var featured = () => {
  var featuredSection = document.getElementById("featured_section");
  window.addEventListener("load", function() {
    if (featuredSection) {

      // on load, display the first thumbnail
      setTimeout(() => {
        $("#featured_section .swiper-slide-active .thumbnail-image").click();
      }, 100);

      setTimeout(() => {
        $("#featured_section").addClass("show");
      }, 500);
  
      $(".featured-swiper .thumbnail-image").each(function() {
        // $(this).click(function() {
        //   var imageSrc = $(this).attr("src");
  
        //   $("#featured_wrapper").fadeOut();
        //   setTimeout(() => {
        //     $("#featured_image").attr("src", imageSrc);
        //     $("#featured_wrapper").fadeIn();
        //   }, 300);
        // });
  
        $(this).click(function() {
          var imageSrc = $(this).attr("src");
  
          if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(".featured-swiper .thumbnail-image").removeClass("active");
            $("#featured_wrapper").css("opacity","0");
            
            setTimeout(() => {
              $("#featured_image").attr("src", imageSrc);
              $("#featured_wrapper").css("opacity","1");
            }, 500);
            $(this).addClass("active");
          }
        });
      });
    }
  });
}


// initialize the functions
headerScrolled();
swipers();
featured();