
(function(module){

  	var dashboardController = {};
  
  	dashboardController.controller = function() {
    	$('.search-content').hide();
    	$('#dashboard').fadeIn(350);
	};

	module.dashboardController = dashboardController;

})(window);
