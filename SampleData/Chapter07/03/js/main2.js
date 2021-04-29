$(function(){
  activateScene2();
  
  function activateScene2(){
    var $content = $('#scene-2-content'),
    $charts = $content.find('.chart');

    $content.stop(true).animate({
      right: 0
    }, 1200, 'easeInOutQuint');

    $charts.each(function(){
      var $chart = $(this),
      $circleLeft = $chart.find('.left .circle-mask-inner').css({transform: 'rotate(0)' }),
      $circleRight = $chart.find('.right .circle-mask-inner').css({ transform: 'rotate(0)' }),
      $percentNumber = $chart.find('.percent-number'),
      percentData = $percentNumber.text();

      $percentNumber.text(0);

      $({percent: 0}).delay(1000).animate({
        percent: percentData
      },{duration: 1500,
      progress: function(){
        var now =this.percent,
        deg = now * 360 / 100,
        degRight = Math.min(Math.max(deg, 0), 180);
        degLeft = Math.min(Math.max(deg - 180,0), 180);

        $circleRight.css({transform: 'rotate(' + degRight + 'deg)'});
        $circleLeft.css({transform: 'rotate(' + degLeft + 'deg)'});
        $percentNumber.text(Math.floor(now));
      }
    });
    });
  }
});