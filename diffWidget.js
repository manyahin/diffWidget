/*global jQuery */
/*!
* DiffWidget.js 1.0
* Copyright 2014, Manyahin Ilya
*/

(function( $ ){

  $.fn.diffWidget = function( options ) {

    var defaults = { 
      width: '900px',
      height: '300px',
      top: 'red',
      bottom: 'blue',
      position: '50%'
    }; 

    var options = $.extend({}, defaults, options); 

    // Template for widget
    // 
    // <div class="diffWidget">
    //   <div class="wrapper">
    //     <div class="first"></div>
    //     <div class="second"></div>
    //   </div>
    // </div>

    var tpl = $('<div class="diffWidget"><div class="wrapper"><div class="first"></div><div class="second"></div></div></div>');

    var wrap = tpl.find('.wrapper'),
      topLayer = wrap.find('.first'),
      bottomLayer = wrap.find('.second');

    function selectMethod(element, option)
    {
      if(option.indexOf('.') != -1)
      {
        element.css('background-image', 'url(' + option + ')');
      } else {
        element.css('background-color', option);
      }
    }

    selectMethod(topLayer, options.top);
    selectMethod(bottomLayer, options.bottom);

    tpl.css('width', options.width);
    tpl.css('height', options.height);

    topLayer.width(options.position);

    wrap.on('mousemove', function(e) {    
      topLayer.width(e.offsetX);
    })

    $(this).append(tpl);

  };

})( jQuery );