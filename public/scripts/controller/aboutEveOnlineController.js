
(function(module){

	var aboutEveController = {};
	
	aboutEveController.controller = function() {
    	$('.tab-content').hide();
    	$('#aboutEve').fadeIn(350);
	};

	module.aboutEveController = aboutEveController;

})(window);
