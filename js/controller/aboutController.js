(function(module) {
  var aboutController = {
    index: function() {
      $('#about').fadeIn().siblings().hide();
    }
  };

  module.aboutController = aboutController;
})(window);
