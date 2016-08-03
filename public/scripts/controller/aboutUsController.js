
(function(module){

  	var aboutUsController = {  
	  	index: function() {
	    	$('#about-us').fadeIn(350).siblings().hide;
	  	}
	};
  
	module.aboutUsController = aboutUsController;

})(window);
