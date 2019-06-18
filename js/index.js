$('.top').hide();

var swiper = new Swiper('.swiper-container', {
  direction: 'vertical'
});

$('.logo-right').click(function() {
 $('.top').show();
})

$('.close').click(function() {
  $('.top').hide();
})