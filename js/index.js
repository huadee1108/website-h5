$('.top').hide();

var swiper_v = new Swiper('#swiper1', {
  direction: 'vertical',
  hashNavigation: true,
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,
});
var galleryBottom = new Swiper('.gallery-bottom', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});
var galleryThumbs = new Swiper('.gallery-thumbs1', {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesVisibility: true,
});
var galleryBottom = new Swiper('.gallery-bottom1', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});

$('.logo-right').click(function() {
 $('.top').show();
});

$('.close1').click(function() {
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
  // document.getElementById('to'+num).scrollIntoView();
  console.log(window.location.href + '#slide' + num);
  window.location.href = window.location.href + '#slide' + num;
}