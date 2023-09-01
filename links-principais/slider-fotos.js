$(function(){

  $('.your-class1').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '25px',
          slidesToShow: 1
        }
      }
    ],
    prevArrow: $('#prev-l-l'),
    nextArrow: $('#prev-l-h')
  });

  $(".your-class2").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerPadding: '25px',
          slidesToShow: 1
        }
      }
    ],
    prevArrow: $('#prev-l-l2'),
    nextArrow: $('#prev-l-h2')
  });
})