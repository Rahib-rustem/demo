

$(document).ready(function() {


    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:1200,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 777,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
    
      
      })//slider





      
    
      

      