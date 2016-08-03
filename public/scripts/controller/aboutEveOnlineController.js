
(function(module){

  var aboutEveController = {
    index: function() {
      $('.tab-content').hide();
      $('#about-eve').fadeIn(350);
    }
  };

  module.aboutEveController = aboutEveController;

})(window);
