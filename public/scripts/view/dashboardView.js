
(function(module) {

  var dashboardView = {};
  var dashboardCompiler = Handlebars.compile($('#dashboard-template').text());

  dashboardView.emptyDashboard = function() {
    $('#user-page-append').empty();
  };

  // dashboardObj.requestInfo(dashboardView,renderDashboard);
  module.dashboardView = dashboardView;

})(window);
