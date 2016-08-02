
(function(module){

  	var singleSearchController = {};
  
  	singleSearchController.controller = function() {
    	$('.search-content').hide();
    	$('#single-search').fadeIn(350);
  	}
  
  	module.singleSearchController = singleSearchController;

})(window);
