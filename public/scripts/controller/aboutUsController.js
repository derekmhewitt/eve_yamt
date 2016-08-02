
(function(module){

	var aboutUsController = {};
  	
  	aboutUsController.controller = function() {
    	$('.tab-content').hide();
    	$('#aboutUs').fadeIn(350);
 	};
  
	module.aboutUsController = aboutUsController;

})(window);
