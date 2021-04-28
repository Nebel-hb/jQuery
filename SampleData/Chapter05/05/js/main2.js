$(function (){
  
  $('#work').each(function (){
    var $tabList = $(this).find('.tabs-nav'),
    $tabAnchors = $tabList.find('a'),
    $tabPanels = $(this).find('.tabs-panel');
    
    $tabList.on('click', 'a', function (event){
      event.preventDefault();
      var $this = $(this);
      
      if ($this.hasClass('active')){
        return;
      }
      $tabAnchors.removeClass('active');
      $this.addClass('active');
      
      $tabPanels.hide();
      $($this.attr('href')).show();
    });
    $tabAnchors.eq(0).trigger('click');
  });
});