(function(module){

  var loginController = {
    index: function() {
      $('.tab-content').hide();
      $('#login').fadeIn(350);
    }
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      loginView.loggedIn();
    } else {
      loginView.loggedOut();
    }
  });

  module.loginController = loginController;

})(window);
