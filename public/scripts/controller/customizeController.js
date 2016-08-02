(function(module){

  	var customizeController = {};
  
  	customizeController.index = function() {
    	$('.tab-content').hide();
    	$('#customize').fadeIn(350);
  	};
	
	module.customizeController = customizeController;

})(window);
