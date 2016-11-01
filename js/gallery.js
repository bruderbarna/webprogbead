$(document).ready(function () {
  $('.gallery .gallery-image').click(function () {
    if ($('#lightbox').length > 0) {
      $('#content').html('<img src ="' + $(this).attr("src") + '">');
      $('#lightbox').show('fast');
      $('#navigation').hide();
    }
    else {
      $('body').append(
        '<div id="lightbox">' +
          //'<p>Click to close</p>' +
          '<div id="content">' +
              '<img src="#" />' +
          '</div>' +
        '</div>'
      );
      $('#content').html('<img src ="' + $(this).attr("src") + '">');
      $('#lightbox').show('fast');
      $('#navigation').hide();
    }
  });

  $('#lightbox').on('click', function () {
    $('#lightbox').hide();
    $('#navigation').show();
  });
});
