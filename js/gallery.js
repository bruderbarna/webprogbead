$(document).ready(function () {
  $('.gallery .gallery-image').click(function () {
    if ($('#lightbox').length > 0) {
      $('#content').html('<img src ="' + $(this).attr("src") + '">');
      $('#lightbox').show('fast');
      $('#navigation').hide();
    } else {
      $('body').append(
        '<div id="lightbox">' +
          //'<p>Click to close</p>' +
          '<div id="content">' +
              '<img src="#" />' +
          '</div>' +
          '<h3 class="close-button">click to close</h3>' +
        '</div>'
      );

      $('#lightbox .close-button').on('click', function () {
        $('#lightbox').hide('fast');
        $('#navigation').show();
      });

      $('#content').html('<img src ="' + $(this).attr("src") + '">');
      $('#lightbox').show('fast');
      $('#navigation').hide();
    }
  });
});
