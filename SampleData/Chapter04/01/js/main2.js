
$(function(){
  var time = 300;
  $('.inner button:nth-child(-n+4)')
  .on('mouseover', function(){
    $(this).stop(true).animate({
      color:'#fff',
      'background-color': '#ae5e9b'
    }, time,'easeOutQuad');
  })
    .on('mouseout', function(){
      $(this).stop(true).animate({
        color:'#ebc000',
        backgroundColor:'#fff'
      }, time,'easeOutQuad');
  });

  $('.inner button:nth-child(n+5):nth-child(-n+8)')
  .on('mouseover',function(){
    $(this).stop(true).animate({
      'color':'#ae5e9b',
      'border-width':'15px',
      'border-color': '#ae5e9b'
    }, time,'easeOutQuad');
  })
  .on('mouseout', function(){
    $(this).stop(true).animate({
      'background-color':'#fff',
      color:'#ebc000',
      'border-width':'0px',
    }, time,'easeOutQuad');
  });

  $('.inner button:nth-child(n+9)')
  .on('mouseover', function(){
    $(this).find('.bg').stop(true).animate({
      width:'100%'
    },time ,'easeOutQuad')
  })
  .on('mouseout',function(){
    $(this).find('>span').stop(true).animate({
      width:'0%'
    },time,'easeOutQuad' );
  });
});