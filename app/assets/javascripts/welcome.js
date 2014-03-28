
$(document).ready(function () {

  $('.js-enlarge-on-click').on('click', function(e) {

    var $box = $(e.currentTarget);
    $('.js-enlarge-on-click').removeClass('selected');
    $box.addClass('selected');

  });

});
