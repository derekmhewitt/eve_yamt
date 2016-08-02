(function(module){

  	var singleSearchController = {};
  
  	singleSearchController.index = function() {
    	$('.tab-content').hide();
    	$('#singleSearchController').fadeIn(350);
  	}
  
  	module.singleSearchController = singleSearchController;

})(window);
