(function(module) {

  loginView = {};

  loginView.loggedOut = function() {
    $('#firebaseui-auth-container').fadeIn();
    $('#new-account').fadeIn();
    $('#signed-in').hide();
  };

  loginView.loggedIn = function() {
    $('#signed-in').fadeIn();
    $('#firebaseui-auth-container').hide();
    $('#new-account').hide();
  };

  module.loginView = loginView;
})(window);
