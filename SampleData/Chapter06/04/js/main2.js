$(function (){
  $('#gallery').each(function (){
    var $container = $(this),
    $loadMoreButton = $('#load-more'),
    $filter = $('#gallery-filter'),
    addItemCount = 16,
    added = 0,
    allData = [],
    filteredData = [];

    $container.masonry({
      columnWidth: 230,
      gutter: 10,
      itemSelector: '.gallery-item'
    });

    $.getJSON('./data/content.json', initGallery);

    function initGallery (data){
      allData = data;
      filteredData = allData;
      addItems();
      $loadMoreButton.on('click', addItems);
      $filter.on('change', 'input[type= "radio"]', filterItems);
    }

    function addItems (filter){
      var elements = [],
      slicedData = filteredData.slice(added, added + addItemCount);

      $.each(slicedData, function (i, item){
        var itemHTML =
          '<li class="gallery-item is-loading">' +
            '<a href="' + item.images.large + '">' +
              '<img src="' + item.images.thumb + '" alt="">' +
                '<span class="caption">' +
                  '<span class="inner">' +
                    '<b class="title">' + item.title + '</b>' +
                    '<time class="date" datatime="' + item.date + '">' +
                      item.date.replace(/-0?/g, '/') +
                    '</time>'
                  '</span>'
                '</span>'
              '</img>'
            '</a>'
          '</li>'
        elements.push($(itemHYML).get(0));
      });

      $container
        .append(elements)
        .imagesLoaded(function(){
          $(elements).removeClass('is-loading');
          $container.masonry('appended', elements);

          if (filter){
            $container.masonry();
          }
        });

        $container.find('a').colorbox({
          maxWidth: '970px',
          maxHeight: '95%',
          title: function (){
            return $(this).find('.inner').html();
          }
        });


        added += slicedData.length;

        if (added < filteredData.length) {
          $loadMoreButton.show();
        }else {
          $loadMoreButton.hide();
        }
    }

    function filterItems (){
      var key = $(this).val(),
      masonryItems = $container.masonry('getItemElements');

      $container.masonry('remove', masonryItems);
      filteredData = [];
      added = 0;

      if (key === 'all'){
        filteredData = allData;
      }else {
        filteredData = $.grep(allData, function (item){
          return item.category === key;
        });
      }
      addItems(true);
    }
  });
     // jQuery UI Button
     $('.filter-form input[type="radio"]').button({
      icons: {
          primary: 'icon-radio'
      }
  });
    // Resize page header
    $('.page-header').each(function () {
      var $header = $(this),
          headerHeight = $header.outerHeight(),
          headerPaddingTop = parseInt($header.css('paddingTop'), 10),
          headerPaddingBottom = parseInt($header.css('paddingBottom'), 10);
      $(window).on('scroll', $.throttle(1000 / 60, function () {
          var scroll = $(this).scrollTop(),
              styles = {};
          if (scroll > 0) {
              if (scroll < headerHeight) {
                  styles = {
                      paddingTop: headerPaddingTop - scroll / 2,
                      paddingBottom: headerPaddingBottom - scroll / 2
                  };
              } else {
                  styles = {
                      paddingTop: 0,
                      paddingBottom: 0
                  };
              }
          } else {
              styles = {
                  paddingTop: '',
                  paddingBottom: ''
              }
          }
          $header.css(styles);
      }));
  });

});
