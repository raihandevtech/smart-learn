(function ($) {
  
  // header-slider
  $('.nave').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true,
    asNavFor: '.header-slider',
    dots: false,
  });
    
  //preloader
    $(window).on('load', function() {
        $("#loader").delay(1000).fadeOut(500);
    })
  
  // counterUp
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // gallery
  $(document).ready(function(){
    var mixer = mixitup('.portfolio-list');
  });

  // gallery
  $('.gallery-slide').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  // popup image
  $('.single-portfolio-item').magnificPopup({
    type: 'image',
    delegate: '.show',
    gallery: {
      enabled: true
    }
  });

  // popup video
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });

  // slider1 popup
  $('#show1').magnificPopup({
    items: [
      {
        src: 'img/student/student1.jpg',
        title: 'photo 1'
      },
      {
        src: 'img/student/student2.jpg',
        title: 'photo 2'
      },
      {
        src: 'img/student/student3.jpg',
        title: 'photo 3'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  // slider2 popup
  $('#show2').magnificPopup({
    items: [
      {
        src: 'img/course/course1.jpg',
        title: 'photo 1'
      },
      {
        src: 'img/course/course2.jpg',
        title: 'photo 2'
      },
      {
        src: 'img/course/course3.jpg',
        title: 'photo 3'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  // slider3 popup
  $('#show3').magnificPopup({
    items: [
      {
        src: 'img/blog/blog1.jpg',
        title: 'photo 1'
      },
      {
        src: 'img/blog/blog2.jpg',
        title: 'photo 2'
      },
      {
        src: 'img/blog/blog3.jpg',
        title: 'photo 3'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  // slider4 popup
  $('#show4').magnificPopup({
    items: [
      {
        src: 'img/gallery/11.jpg',
        title: 'photo 1'
      },
      {
        src: 'img/gallery/12.jpg',
        title: 'photo 2'
      },
      {
        src: 'img/gallery/13.jpg',
        title: 'photo 3'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image'
  });
  // header-slider
  $('.header-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    asNavFor: '.nave'
    });
  // teacher-slider
  $('.teacher-slide').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // brands
  $('.brands').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // testimonials
  $('.testimonial-slide').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
 
  // accordion
  $(document).ready(function(){
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
  });
  $(".main-menu ul li a").hover(function(){
    if($(this).children("span").hasClass("fa-plus")){
      $(this).children("span").addClass("fa-minus").removeClass("fa-plus")
    }else{
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
    }
    
  });

  $(".question").click(function(){
    // self clicking close
    if($(this).next(".panel").hasClass("active")){
      $(this).next(".panel").removeClass("active").slideUp(300)
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
    }else{
      $(".accordion .panel").removeClass("active").slideUp(300)
      $(".accordion .question span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".panel").addClass("active").slideDown(300)
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
      
    }
  });
  // scroll-top
  $('.top').click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 1000);
  });
  $('.top').hide();

    $(window).scroll(function () {
        var ourWindow = $(this).scrollTop();
        if (ourWindow < 500) {
            $('.top').fadeOut();
        } else {
            $('.top').fadeIn();
        }
        if (ourWindow > 50) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }

    });
  });


})(jQuery);


          
