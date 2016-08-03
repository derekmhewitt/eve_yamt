
(function(module){

  	var aboutUsController = {
	  	index: function() {
        $('.tab-content').hide();
	    	$('#about-us').fadeIn(350);
	  	}
	};

	module.aboutUsController = aboutUsController;

})(window);
