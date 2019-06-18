(function(){
  var designWidth = 750;
  changeRootRem();
  window.addEventListener("resize", function(){
     changeRootRem();
  },false);
  setTimeout(function(){
       changeRootRem();//防止某些机型怪异现象，异步再调用一次。
   },500);
  //设置rem的根值
  function changeRootRem(){
     var winW = document.documentElement.getBoundingClientRect().width || window.innerWidth;
     document.documentElement.style.fontSize = (winW * 100 / designWidth) + 'px';
  }
})()