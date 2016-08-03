
(function(module){

  	var searchController = {  
	  	index: function() {
	    	$('#search').fadeIn(350).siblings().hide;
	  	}
	};
  
	module.searchController = searchController;

})(window);