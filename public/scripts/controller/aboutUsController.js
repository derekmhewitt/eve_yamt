(function(module){

	var aboutUsController = {};
  	
  	customizeController.index = function() {
    	$('.tab-content').hide();
    	$('#aboutUs').fadeIn(350);
 	};
  
	module.aboutUsController = aboutUsController;

})(window);
