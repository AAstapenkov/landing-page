$(document).ready(function(){
    $('.carousel-inner').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="images/1485477129-arrow-left2_78578.png" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/arrows-right_97797.png" alt=""></button>'
  
    });
});
  
$(document).ready(function(){
  $('.header-burger, .is active').click(function(event) {
    $('.header-burger, .header-nav').toggleClass('active');
  });
});

