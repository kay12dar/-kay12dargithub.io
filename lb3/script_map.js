$(document).ready(function(){
    $('area').hover(function(){
      var country = $(this).data('country');
      var info = $(this).data('info');
      $(this).css('fill', '#EF5A83');
      $('.tooltip').html(country + "" + info).css({
        top: event.pageY - ($('.tooltip').outerHeight() / 1),
        left: event.pageX - ($('.tooltip').outerWidth() / 2)
      }).show();
    }, function(){
      $(this).css('fill', '');
      $('.tooltip').hide();
    });
  });