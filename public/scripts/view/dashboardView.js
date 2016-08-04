
(function(module) {

  var dashboardView = {};
  var dashboardViewTemplateSource = $('#dashboard-template').html();
  var dashboardViewTemplate = Handlebars.compile(dashboardViewTemplateSource);

  dashboardView.renderDashboard = function(data) {
    console.log('dashboardView.renderDashboard', data);
    // data.forEach(function(current) {
    $('#dashboard-append').append(dashboardViewTemplate(data));
    // });
  };

  module.dashboardView = dashboardView;
})(window);
