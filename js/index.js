$('.top').hide();

var swiper = new Swiper('.swiper-container', {
  direction: 'vertical'
});

$('.logo-right').click(function() {
 $('.top').show();
});

$('.close').click(function() {
  $('.top').hide();
});

var list = [];
for (var i = 1; i< 7; i++) {
  list.push(i);
}

changeStatus(1);

function changeStatus(num) {
  list.forEach(function(item) {
    if( num == item) {
     $('#'+item).children("div.line").show();
    }else {
      $('#'+item).children("div.line").hide();
    }
  })
  $('.top').hide();
  document.getElementById('to'+num).scrollIntoView();
}