(function(module) {
  loginModel = {};

  // function User() {
  //   this.userID = '';
  //   this.userEmail = '';
  //   this.userPassword = '';
  //   this.dashboardData = [];
  // }

  var loginModel = {};

  $('#new-account-form-submit').on('click', function(event) {
    event.preventDefault();
    loginModel.register();
  });

  loginModel.register = function() {
    var email = $('#new-account-user-email').val();
    var password = $('#new-account-user-password').val();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('Error ', errorCode, errorMessage);
    });
    $('#new-account-user-email').val('');
    $('#new-account-user-password').val('');
    page('/dashboard');
  };

  $('#sign-out').on('click', function() {
    loginModel.signOut();
  });

  loginModel.signOut = function() {
    firebase.auth().signOut().then(function() {
      loginView.loggedOut();
      page('/');
    }, function(error) {
      console.log('error signing out: ', error);
    });
  };

  loginModel.signedIn = function() {
    var user = firebase.auth().currentUser;
    page('/dashboard');
    if(user) {
      loginView.loggedIn();
      if(error) {
        console.log('Error signing in: ', error);
      }
    }
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      loginView.loggedIn();
    } else {
      loginView.loggedOut();
    }
  });

  module.loginModel = loginModel;
})(window);
