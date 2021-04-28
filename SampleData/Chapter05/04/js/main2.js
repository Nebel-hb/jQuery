
$(function () {

  $('.page-header').each(function (){
    var $window = $(window),
    $header = $(this),
    $headerClone = $header.contents().clone(),
    $headerCloneContainer = $('<div class="page-header-clone"></div>'),
    threshold = $header.offset().top + $header.outerHeight();

    $headerCloneContainer.append($headerClone);
    $headerCloneContainer.appendTo('body');
    $window.on('scroll', $.throttle(1000 / 15, function (){
      if ($window.scrollTop() > threshold){
        $headerCloneContainer.addClass('visible');
      }else{
        $headerCloneContainer.removeClass('visible');
      }
    }));
    $window.trigger('scroll');
  });
});