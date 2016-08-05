(function(module) {
  var loginView = {};

  loginView.loggedOut = function() {
    $('#firebaseui-auth-container').fadeIn();
    $('#new-account').fadeIn();
    $('#signed-in').hide();
    $('#login-navigation').html('<a href="/login">Login</a>');
  };

  loginView.loggedIn = function() {
    $('#signed-in').fadeIn();
    $('#firebaseui-auth-container').hide();
    $('#new-account').hide();
    $('#login-navigation').html('<a href="/login">Log Out</a>');
  };

  module.loginView = loginView;
})(window);
