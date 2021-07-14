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
    slidesPerView: 3,
    slidesPerGroup: 3,
    // loop: true,
    // loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".featured-swiper .swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".featured-swiper .swiper-button-next",
      prevEl: ".featured-swiper .swiper-button-prev",
    },
  });
}


// initialize the functions
headerScrolled();
swipers();