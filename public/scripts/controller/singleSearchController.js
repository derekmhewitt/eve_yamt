(function(module){
  var singleSearchController = {};
  singleSearchController.index = function() {
    $('.tab-content').hide();
    $('#singleSearchController').fadeIn();
  }
  module.singleSearchController = singleSearchController;
})(window);
