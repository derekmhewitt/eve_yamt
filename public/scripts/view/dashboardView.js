
(function(module) {

  var dashboardView = {};
  var dashboardViewTemplateSource = $('#dashboard-template').html();
  var dashboardViewTemplate = Handlebars.compile(dashboardViewTemplateSource);

  dashboardView.renderDashboard = function(data) {
    console.log(data);
    $('#dashboard-append').empty();
    $('#dashboard-append').append(dashboardViewTemplate(data));
  };

  module.dashboardView = dashboardView;
})(window);
