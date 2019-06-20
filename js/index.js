$('.top').hide();

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

function myFunction() {
  var num = window.location.hash.charAt(window.location.hash.length - 1);
  list.forEach(function(item) {
    if( num == item) {
     $('#'+item).children("div.line").show();
    }else {
      $('#'+item).children("div.line").hide();
    }
  })
}

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
  // if (window.location.href.lastIndexOf('#') != -1) {
  //   window.location.href = window.location.href.substring(0,window.location.href.length-1) + num;
  // } else {
  //   window.location.href = window.location.href + '#slide' + num;
  // }
  // console.log(window.location.href + '#slide' + num);
  // window.location.href = window.location.href + '#slide' + num;
}

var baseUrl = 'http://192.168.2.36:8076';
// var baseUrl = 'gwapi.jbhoa.cn';
var companyIntro_title,
    companyIntro_content;

//首页接口
$.ajax({
  url: baseUrl + '/app/index/getIndexquery',
  type: 'GET',
  success:function(result) {
    if (result.ret == 100) {
      companyIntro_title = result.data.title;
      companyIntro_content = result.data.content;
      $('.tip_title').text(companyIntro_title);
      if (companyIntro_content.length >= 30) {
        $('.tip_title').text(companyIntro_content.substring(0,30));
      }else {
        $('.tip_content').text(companyIntro_content);
      }
      $('.intro_title').text(companyIntro_title);
      $('.intro_alltext').text(companyIntro_content);
    }
  }
});

//我们的产品接口
$.ajax({
  url: baseUrl + '/app/productIntroduction/getProductIntroductionQuery',
  type: 'GET',
  async: false,
  success:function(result) {
    if (result.ret == 100) {
      var str_title = '';
      var str_content = '';
      console.log(result.dataList);
      result.dataList.forEach(function(item) {
        str_title = str_title + '<div class="swiper-slide">'+item.introductionTitle+'</div>';
        str_content = str_content + '<div class="swiper-slide"><h4>'+item.introductionTitle+'</h4><p>'+item.introductionContent+'</p></div>';
      });
      $('.gallery-thumbs').children('div .swiper-wrapper').append(str_title);
      $('.gallery-bottom').children('div .swiper-wrapper').append(str_content);
    }
  }
});

//发展历程接口
$.ajax({
  url: baseUrl + '/app/developmentHistory/getDevelopmentHistoryQuery',
  type: 'GET',
  async: false,
  success:function(result) {
    if (result.ret == 100) {
      var str_title = '';
      var str_content = '';
      console.log(result.dataList);
      result.dataList.forEach(function(item) {
        str_title = str_title + '<div class="swiper-slide">'+item.productIntroduction+'</div>';
        str_content = str_content + '<div class="swiper-slide"><h4>'+item.productIntroduction+'</h4><p>'+item.developmentContent+'</p></div>';
      });
      $('.gallery-thumbs1').children('div .swiper-wrapper').append(str_title);
      $('.gallery-bottom1').children('div .swiper-wrapper').append(str_content);
    }
  }
});

var provinceArray = '';
var provinceData = [];
//省份接口
$.ajax({
  url: baseUrl + '/api/other/address/provinceList',
  type: 'GET',
  async: false,
  success:function(result) {
    if (result.ret == 100) {
      var str_option = '';
      console.log(result.objList);
      provinceData = result.objList;
      provinceArray = result.objList[0].regProvinceNum;
      result.objList.forEach(function(item) {
        str_option = str_option + "<option value="+item.regProvinceNum+">"+item.regProvinceName+"</option>";
      });
      $('#province').append(str_option);
    }
  }
});

$.ajax({
  url: baseUrl + '/api/other/address/selectCityList',
  type: 'GET',
  data: {provinceCode: provinceArray},
  success: function(result) {
    if (result.ret == 100) {
      $('#city').empty();
        var str_option = '';
        console.log(result.objList);
        result.objList.forEach(function(item) {
          str_option = str_option + "<option value="+item.regCityName+">"+item.regCityName+"</option>";
        });
        $('#city').append(str_option);
    }
  }
})

console.log($('#province').val());
//市接口
$('#province').change(function() {
  var provinceCode = $("#province option:selected").val();
  console.log($('#province').val());
  var province = { provinceCode: provinceCode };
  $.ajax({
        url: baseUrl + '/api/other/address/selectCityList',
        type: 'GET',
        data: province,
        success: function(result) {
          if (result.ret == 100) {
            $('#city').empty();
              var str_option = '';
              console.log(result.objList);
              result.objList.forEach(function(item) {
                str_option = str_option + "<option value="+item.regCityName+">"+item.regCityName+"</option>";
              });
              $('#city').append(str_option);
          }
        }
      })
})

//岗位接口
$.ajax({
  url: baseUrl + '/app/position/getPositionQuery',
  type: 'GET',
  async: false,
  success: function(result) {
    if (result.ret == 100) {
      var str_option = '';
      console.log(result.dataList);
      result.dataList.forEach(function(item) {
        str_option = str_option + "<option value="+item.id+">"+item.positionName+"</option>";
      });
      $('#work').append(str_option);
    }
  }
});

//商务合作接口
$.ajax({
  url: baseUrl + '/app/businessCooperation/getBusinessCooperationQuery',
  type: 'GET',
  success: function(result) {
    if (result.ret == 100) {
      var str_toget = '';
      console.log(result.dataList);
      result.dataList.forEach(function(item) {
        str_toget = str_toget + '<div class="toget"><h5>'+item.companyName+'</h5><p>'+item.contactInformation+'</p><a href="">'+item.companyUrl+'</a></div>';
      });
      $('.coope').append(str_toget);
    }
  }
})

var province = '';
$('form').on('submit', function (e) {
  e.preventDefault();
  var partnerName = $('#name').val();
  var partnerTel = $('#phone').val();
  var provinceId = $('#province').val();
  provinceData.forEach(function(item) {
    if (item.regProvinceNum == provinceId) {
        province = item.regProvinceName.trim();
    }
   });
   var city = $('#city').val();
   var positionId = $('#work').val();
   var data = { 
                partnerName: partnerName, 
                partnerTel: partnerTel,
                province: province,
                city: city,
                positionId: positionId
              };
   var jsonData = JSON.stringify(data);
   $.ajax({
    url: baseUrl + '/app/joinUs/editJoinUs',
    type: 'POST',
    contentType: 'application/json',
    data: jsonData,
    success: function(result) {

    }
   });

  console.log('dd');
});

var swiper_v = new Swiper('#swiper1', {
  direction: 'vertical',
  hashNavigation: {
    watchState: true,
  },

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