
(function(module){

  var aboutEveOnlineController = {
    index: function() {
      $('.tab-content').hide();
      $('#about-eve').fadeIn(350);
    }
  };

  module.aboutEveOnlineController = aboutEveOnlineController;

})(window);
