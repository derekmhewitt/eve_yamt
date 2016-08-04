
(function(module) {

  var dashboardView = {};
  var dashboardViewTemplateSource = $('#dashboard-template').html();
  var dashboardViewTemplate = Handlebars.compile(dashboardViewTemplateSource);

  dashboardView.renderDashboard = function(data) {
    console.log('dashboardView.renderDashboard', data);
    $('#dashboard-append').empty();
    data.forEach(function(current){
      $('#dashboard-append').append(dashboardViewTemplate(current));
    });
  };

  module.dashboardView = dashboardView;
})(window);
