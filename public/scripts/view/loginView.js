(function(module) {

  loginView = {};

  loginView.loggedOut = function() {
    $('#firebaseui-auth-container').fadeIn();
    $('#new-account').fadeIn();
    $('#signed-in').hide();
    $('#login-navigation').text('Login');
  };

  loginView.loggedIn = function() {
    $('#signed-in').fadeIn();
    $('#firebaseui-auth-container').hide();
    $('#new-account').hide();
    $('#login-navigation').text('Log Out');
  };

  module.loginView = loginView;
})(window);
