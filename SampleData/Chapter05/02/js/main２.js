$(function (){

  $('.slideshow').each(function() {

      var $container = $(this),
      $slideGroup = $container.find('.slideshow-slides'),
      $slides = $slideGroup.find('.slide'),
      $nav = $container.find('.slideshow-nav'),             // d
      $indicator = $container.find('.slideshow-indicator'), // e

      slideCount = $slides.length,
      indicatorHTML ='',
      currentIndex = 0,
      duration = 500,
      easing = 'easeInOutExpo',
      interval = 7500,
      timer;

      $slides.each(function (i) {
          $(this).css({ left: 100 * i + '%' });
          indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
      });

      $indicator.html(indicatorHTML);

      function goToSlide (index) {
          $slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
          currentIndex = index;
          updateNav();
      }

      function updateNav () {
          var $navPrev = $nav.find('.prev'), // Prev (戻る) リンク
              $navNext = $nav.find('.next'); // Next (進む) リンク
          if (currentIndex === 0) {
              $navPrev.addClass('disabled');
          } else {
              $navPrev.removeClass('disabled');
          }

          if (currentIndex === slideCount - 1) {
            $navNext.addClass('disabled');
          } else {
            $navNext.removeClass('disabled');
          }
          
          $indicator.find('a').removeClass('active')
          .eq(currentIndex).addClass('active');
        }

    function startTimer(){
      timer = setInterval( function (){
        var nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
      }, interval);
    }

    function stopTimer () {
      clearInterval(timer);
    }

    $nav.on('click', 'a', function (event){
      event.preventDefault();
      if ($(this).hasClass('prev')){
        goToSlide(currentIndex -1);
      }else{
        goToSlide(currentIndex +1)
      }
    });

    $indicator.on('click', 'a', function (event){
      event.preventDefault();
      if (!$(this).hasClass('active')){
        goToSlide($(this).index());
      }
    });

    $container.on({
      mouseenter: stopTimer,
      mouseleave: startTimer
    });

    goToSlide(currentIndex);

    startTimer();

  });
});
