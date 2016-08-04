
(function(module){

  var dashboardController = {
    index: function() {
      $('.tab-content').hide();
      $('#dashboard').fadeIn(350);
    }
  };

  module.dashboardController = dashboardController;

})(window);
