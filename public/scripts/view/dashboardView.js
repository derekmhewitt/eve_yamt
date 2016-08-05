(function(module) {
  var dashboardView = {};

  var dashboardViewTemplateSource = $('#dashboard-template').html();
  var dashboardViewTemplate = Handlebars.compile(dashboardViewTemplateSource);

  dashboardView.renderDashboard = function(data) {
    $('#dashboard-append').append(dashboardViewTemplate(data));
  };

  $('#clear-dashboard').on('click', function(event) {
    event.preventDefault();
    database.ref('/users/' + loginController.user.uid + '/dashboard/').remove();
  });
  module.dashboardView = dashboardView;
})(window);
