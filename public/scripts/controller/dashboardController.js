
(function(module){

  	var dashboardController = {  
	  	index: function() {
	    	$('#dashboard').fadeIn(350).siblings().hide;
	  	}
	};

	module.dashboardController = dashboardController;

})(window);
