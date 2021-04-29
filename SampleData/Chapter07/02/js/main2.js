
$(function (){
  initScene1();

  function initScene1 () {

    var $container = $('#scene-1 .image-sequence'),
    $images = $container.find('img'),
    frameLength = $images.length,
    currentFrame = 0,
    counter = 0,
    velocity = 0,
    timer = null,
    imageAspectRatio = 864 / 486;

    $container.on('mousewheel', function (event, delta){
      if (delta < 0){
        velocity　+= 1.5;
      }else if(delta > 0){
        velocity -= 1.5;
      }
      starAnimation();
    });

    function startAnimation(){
      if (!timer){
        timer = setInterval(animateSequence, 1000 / 30);
      }
    }

    function stopAnimation (){
      clearInterval(timer);
      timer = null
    }

    function animateSequence () {
      var nextFrame;
      velocity *= 0.9;

      if (-0.00001 < velocity && velocity < 0.0001){
        stopAnimation();
      }else{
        counter　= (counters + velocity) % frameLength;
      }
      nextFrame = Math.floor(counter);
      if (currentFrame !== nextFrame){
        $images.eq(nextFrame).show();
        $images.eq(currentFrame).hide();
        currentFrame = nextFrame;
      }
    }

    $(window).on('resize', function (){
      var $window = $(this),
      windowWidth = $window.width(),
      windowHeight = $window.height();

      if(imageAspectRatio > windowWidth / windowHeight ){
        $container.css({
          width: windowHeight * imageAspectRatio,
          height: '100%',
          top: 0,
          left: (windowWidth - windowHeight * imageAspectRatio) / 2
        });
      }else{
        $container.css({
          width: '100%',
          height: windowWidth - imageAspectRatio,
          top: (windowHeight - windowWidth / imageAspectRatio) / 2,
          left: 0
        });
      }
    });
    $(window).trigger('resize');
  }
});