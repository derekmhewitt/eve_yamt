
(function(module){

  var userController = {
    index: function() {
      $('.tab-content').hide();
      $('#user-page').fadeIn(350);
    }
  };

  module.userController = userController;

})(window);
