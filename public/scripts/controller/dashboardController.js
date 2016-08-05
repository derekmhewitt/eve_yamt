
(function(module){

  var dashboardController = {
    index: function() {
      $('.tab-content').hide();
      $('#dashboard').fadeIn(350);
    }
  };

  dashboardController.listener = function() {
    database.ref('/users/' + loginController.user.uid + '/dashboard/').on('value', function(data) {
      var zebraArray = [];
      var zebra = data.val();
      for(prop in zebra){
        zebraArray.push(zebra[prop]);
      };
      dashboardModel.processData(zebraArray);
    });
  };

  module.dashboardController = dashboardController;

})(window);
