
  // Smooth scrolling to anchors

(function () {
  $('a[href*=#]').on('click', function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top - 52}, 500);
  });
})();
