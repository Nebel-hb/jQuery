
$(function (){
  $('.work-section').each(function (){

    var $container = $(this),
    $navItems = $container.find('.tabs-nav li'),
    $highlight = $container.find('.tabs-highlight');

    $container.tabs({
      hide: { duration: 250 },
      show: { duration: 125 },

      create: moveHighlight,
      activate: moveHighlight
    });

    function moveHighlight (event,ui) {
      var $newTab = ui.newTab || ui.tab,
      left = $newTab.position().left;
    
      $highlight.animate({ left:left }, 500, 'easeOutExpo');
    }
  });
});