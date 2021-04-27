$(function(){
  
  var time = 300;
    $('#buttons2 button').each(function(index){
    var pos = index * 40 - 40;
    $(this).css('top',pos);
  })
  .on('mouseover',function(){
    var btn =$(this).stop(true).animate({
      'background-color' : '#faee00',
      color : '#000'
    },time);
    btn.find('img:nth-child(1)').stop(true).animate({
      opacity:0
    },time);
    btn.find('img:nth-child(2)').stop(true).animate({
      opacity:1
    },time);
  })
  .on('mouseout',function(){
    var btn =$(this).stop(true).animate({
      'background-color' : '#fff',
      color : '##01b169'
    },time);
    btn.find('img:nth-child(1)').stop(true).animate({
      opacity:1
    },time);
    btn.find('img:nth-child(2)').stop(true).animate({
      opacity:0
    },time);
  })
})