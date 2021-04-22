
$(function(){
  var time = 300;

  var image = $('.inner p');
  image.filter(':nth-child(1)')
  .on('mouseover',function(){
    $(this).find('strong, span').stop(true).animate({
      opacity:'1'
    },time);
  })
  .on('mouseout', function(){
    $(this).find('strong, span').stop(true).animate({
      opacity:0
    },time);
  });

  image.filter(':nth-child(2)')
  .on('mouseover', function(){
    $(this).find('strong').stop(true).animate({
      left:'0%',
      opacity:1,
    },time);
    $(this).find('span').stop(true).animate({
      opacity:1,
    },time);
  })
  .on('mouseout', function(){
    $(this).find('strong').stop(true).animate({
      opacity:0,
      left:'-200%'
    })
    $(this).find('span').stop(true).animate({
      opacity:0,
    }, time);
  });

  image.filter(':nth-child(3)')
  .on('mouseover', function(){
    $(this).find('span').stop(true).animate({opacity:1},time);
    $(this).find('strong').stop(true).animate({bottom:'0px'},time);
    $(this).find('img').stop(true).animate({top:'-20px'},time);
  })
  .on('mouseout', function(){
    $(this).find('span').stop(true).animate({opacity:0},time);
    $(this).find('strong').stop(true).animate({bottom:'-80px'},time);
    $(this).find('img').stop(true).animate({top:'0px'},time);
  })
});