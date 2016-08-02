
(function(module){

  	var indexController = {};
  
  	indexController.controller = function() {
    	$('.tab-content').hide();
    	$('#index').fadeIn(350);
  	};

	module.indexController = indexController;

})(window);
