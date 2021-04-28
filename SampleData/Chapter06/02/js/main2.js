$(function (){

  $('#gallery').each(function (){
    var $container = $(this);
    
    $container.masonry({
      columWidth: 230,
      gutter: 10,
      itemSelector: '.gallery-item'
    });

    $.getJSON('./datacontent.json', function(data){
      var element = [];
      $.each(data, function (i, item){
        var itemHTML = 
        '<li class="gallery-item is-loading">'+
          '<a href="'+ item.images.large + '">'+
            '<img src="'+ item.images.thumb +
            '" alt="'+ item.title+'">'+
          '</a>' +
        '</li>';

        customElements.push($(itemHTML).get(0));
      });

      $container.append(elements);
      $container.imagesLoaded(function (){
        $(elements).removeClass('is-loading');
        $container.masonry('append', elements);
      })
    })
  })
})