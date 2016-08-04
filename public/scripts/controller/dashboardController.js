
(function(module){

  var dashboardController = {
    index: function() {
      $('.tab-content').hide();
      $('#dashboard').fadeIn(350);
    }
  };

  dashboardController.listener = function() {
    firebase.database().ref('/users/' + user.uid + '/dashboard').on('value', function(data) {
      dashboardView.renderDashboard(data);
    });
  };

  module.dashboardController = dashboardController;

})(window);
