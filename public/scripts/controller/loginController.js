(function(module){

  var loginController = {
    index: function() {
      $('.tab-content').hide();
      $('#login').fadeIn(350);
    }
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      loginController.user = firebase.auth().currentUser;
      $('#customize-navigation').show();
      $('#single-search-navigation').show();
      loginView.loggedIn();
      dashboardController.listener();
    } else {
      $('#customize-navigation').hide();
      $('#single-search-navigation').hide();
      loginView.loggedOut();
    }
  });

  module.loginController = loginController;
})(window);
