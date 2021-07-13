// header function
var headerScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}

var swipers = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".hero-swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".hero-swiper .swiper-button-next",
    prevEl: ".hero-swiper .swiper-button-prev",
  },
});


// initialize the functions
headerScrolled();