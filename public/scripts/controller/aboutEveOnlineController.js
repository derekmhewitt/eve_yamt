
(function(module){

  	var aboutEveController = {  
	  	index: function() {
	    	$('#about-eve').fadeIn(350).siblings().hide;
	  	}
	};

	module.aboutEveController = aboutEveController;

})(window);
