$(function(){
  $('#typo')
    .on('mouseover',function(){
      $(this).stop(true).animate({
        'background-color':'#ff3'
        },500,'swing',);
      })
      .on('mouseout', function(){
        $('#typo').stop(true).animate({
          'background-color': '#3498db'},
          500);
      });
    });