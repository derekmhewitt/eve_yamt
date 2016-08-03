
(function(module){

  	var singleSearchController = {
	  	index: function() {
        $('.tab-content').hide();
	    	$('#single-search').fadeIn(350);
	  	}
	};

  	module.singleSearchController = singleSearchController;

})(window);
