(function(module){
  var homeController = {};
  homeController.index = function() {
    $('.tab-content').hide();
    $('#home').fadeIn();
  };
  module.homeController = homeController;
})(window);
