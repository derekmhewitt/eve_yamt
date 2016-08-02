(function(module){
  var aboutUsController = {};
  customizeController.index = function() {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };
  
module.aboutUsController = aboutUsController;
})(window);
