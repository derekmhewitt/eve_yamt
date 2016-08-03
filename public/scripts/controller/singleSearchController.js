
(function(module){

  	var singleController = {  
	  	index: function() {
	    	$('#single-search').fadeIn(350).siblings().hide;
	  	}
	};
  
  	module.singleController = singleController;

})(window);
