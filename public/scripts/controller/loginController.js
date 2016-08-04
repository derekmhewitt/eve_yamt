(function(module){

  var loginController = {
    index: function() {
      $('.tab-content').hide();
      $('#login').fadeIn(350);
    }
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      $('#customize-navigation').show();
      loginView.loggedIn();
    } else {
      $('#customize-navigation').hide();
      loginView.loggedOut();
    }
  });

  module.loginController = loginController;

})(window);
