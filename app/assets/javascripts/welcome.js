$(function () {

  $(document).on('click', '.js-enlarge-on-click', function(e) {

    $('.js-enlarge-on-click').removeClass('selected');
    $(e.currentTarget).addClass('selected');

  });
});
