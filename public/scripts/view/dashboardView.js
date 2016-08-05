(function(module) {
  var dashboardView = {};

  var dashboardViewTemplateSource = $('#dashboard-template').html();
  var dashboardViewTemplate = Handlebars.compile(dashboardViewTemplateSource);

  dashboardView.renderDashboard = function(data) {
    $('#dashboard-append').append(dashboardViewTemplate(data));
  };

  module.dashboardView = dashboardView;
})(window);
