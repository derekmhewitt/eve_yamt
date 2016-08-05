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
      $('#customize-navigation-exp').show();
      $('#single-search-navigation-exp').show();
      loginView.loggedIn();
      dashboardController.listener();
    } else {
      $('#customize-navigation').hide();
      $('#single-search-navigation').hide();
      $('#customize-navigation-exp').hide();
      $('#single-search-navigation-exp').hide();
      loginView.loggedOut();
    }
  });

  module.loginController = loginController;
})(window);
