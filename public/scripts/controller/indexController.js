
(function(module){

  var indexController = {
    index: function() {
      $('.tab-content').hide();
      $('#home').fadeIn(350);
    }
  };

  module.indexController = indexController;

})(window);
