(function(module){

  var loginController = {
    index: function() {
      $('.tab-content').hide();
      $('#login').fadeIn(350);
    }
  };

  module.loginController = loginController;

})(window);
