$(document).ready(function () {
  var isGalleryOpen = false;

  $('.gallery .gallery-image').click(function () {
    console.log("gcl");
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
      $('#content').html('<img src ="' + $(this).attr("src") + '">');
      $('#lightbox').show('fast');
      $('#navigation').hide();
      isGalleryOpen = true;
    }
  });

  $('html').click(function () {
    if (isGalleryOpen) {
      $('#lightbox').hide('fast');
      $('#navigation').show();
      isGalleryOpen = false;
    }
  });
});
