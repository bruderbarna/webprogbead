$(document).ready(function (  ) {
  var gallery = $('.gallery');
  var galleryImages = gallery.find('.gallery-item img.gallery-image');

  galleryImages.each(function () {
    //console.log($(this).attr('src'));
    var image = $(this);

    image.click(function () {
      // TODO: open fullscreen gallery with left and right buttons
    });
  });

  /*
  galleryItems.forEach(function (index, item) {
    item.click(function () {
      console.log(item.find('img.gallery-image').attr('src'));
    });
  });
  */

});
