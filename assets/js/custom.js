
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(".dropdown-trigger").dropdown();

  //carousel

  var instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

  //slick carousel

  $('.hero').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false
   
  });
  
  $('.feature-product').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<span class="prev-arrow"><img src="./assets/images/prev.png" alt=""></span>',
    nextArrow: '<span class="next-arrow"><img src="./assets/images/next.png" alt=""></span>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
  });

  $('.customer-review').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  //slick carousel
  $('.best-seller').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<span class="prev-arrow"><img src="./assets/images/prev.png" alt=""></span>',
    nextArrow: '<span class="next-arrow"><img src="./assets/images/next.png" alt=""></span>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,dots:true
        }
      }
    ]
  });