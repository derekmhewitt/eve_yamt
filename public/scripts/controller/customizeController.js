
(function(module){

  	var customizeController = {};
  
  	customizeController.controller = function() {
    	$('.search-content').hide();
    	$('#customize-search').fadeIn(350);
  	};
	
	module.customizeController = customizeController;

})(window);
