$(document).ready(function(){
     $(window).scroll(function(){
          var sticky = $('.sticky'),
              scroll = $(window).scrollTop();
        
          if (scroll >= 100) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
     });

     $(".owl-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          margin: 25,
          loop: true,
          center: true,
          dots: false,
          nav: true,
          navText : [
              '<i class="fa-solid fa-chevron-left"></i>',
              '<i class="fa-solid fa-chevron-right"></i>'
          ],
          responsive: {
              0:{
                  items:1
              },
              768:{
                  items:2
              },
              992:{
                  items:3
              }
          }
     });
});