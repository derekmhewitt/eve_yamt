(function(module){

	var aboutEveController = {};
	
	aboutEveController.index = function() {
    	$('.tab-content').hide();
    	$('#aboutEve').fadeIn(350);
	};

	module.aboutEveController = aboutEveController;

})(window);
