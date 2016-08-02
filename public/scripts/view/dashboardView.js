
(function(module) {
  
  	var dashboardView = {};
  	var dashboardCompiler = Handlebars.compile($('#dashboard-template').text());
  
  	dashboardView.renderDashboard = function() {
    	$().empty.append();
  	};

  	// dashboardObj.requestInfo(dashboardView,renderDashboard);
  	module.dashboardView = dashboardView;

})(window);
