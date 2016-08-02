(function(module){
  var indexControllers = {};
  indexController.index = function() {
    $('.tab-content').hide();
    $('#index').fadeIn();
  };
module.indexController = indexController;

})(window);
