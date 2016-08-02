(function(module){

  	var dashboardController = {};
  
  	dashboardController.index = function() {
    	$('.tab-content').hide();
    	$('#dashboard').fadeIn(350);
	};

	module.dashboardController = dashboardController;

})(window);
