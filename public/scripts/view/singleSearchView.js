
(function(module) {
	
	var singleSearchView = {};
	var searchCompiler = Handlebars.compile($('#search-template').text());

	singleSearchView.render = function() {
		$('').empty().append();
	};

	// singleSearchObj.requestInfo(singleSearchView,renderSearch);
	module.singleSearchView = singleSearchView;

})(window);
