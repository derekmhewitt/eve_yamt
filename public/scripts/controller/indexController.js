
(function(module){

  	var indexController = {  
	  	index: function() {
	    	$('#home').fadeIn(350).siblings().hide;
	  	}
	};

	module.indexController = indexController;

})(window);
