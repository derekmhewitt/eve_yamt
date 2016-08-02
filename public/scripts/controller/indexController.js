(function(module){

  	var indexControllers = {};
  
  	indexController.index = function() {
    	$('.tab-content').hide();
    	$('#index').fadeIn(350);
  	};

	module.indexController = indexController;

})(window);
