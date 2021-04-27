$(function(){
  var time = 300;
  var aside = $('.page-main > aside')
  var asideButton = aside.find('button')
  .on('click', function(){
    aside.toggleClass('open');
    if(aside.hasClass('open')){
      aside.stop(true).animate({left:'-70px'}, time,'easeOutBack')
      asideButton.find('img').attr('src','img/btn_close.png');
    }else{
      aside.stop(true).animate({left:'-350px'},time,'easeInBack')
      asideButtom.find('img').attr('src','img/btn_open.png');
    }
  })

})