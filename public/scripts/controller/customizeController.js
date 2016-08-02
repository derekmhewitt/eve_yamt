(function(module){
  var customizeController = {};
  customizeController.index = function() {
    $('.tab-content').hide();
    $('#customize').fadeIn();
  };
module.customizeController = customizeController;

})(window);
