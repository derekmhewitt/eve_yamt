
(function(module){

  	var indexController = {
	  	index: function() {
        $('.tab-content').hide();
	    	$('#home').fadeIn(350);
	  	}
	  	indexData.displayDataObject();
	};

	module.indexController = indexController;

})(window);
