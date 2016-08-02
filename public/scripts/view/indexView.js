
(function(module) {
  	
  	var indexView = {};
  	var indexCompiler = Handlebars.compiler($('#(index-template)').text());
  
  	indexView.render = function() {
    	('').empty().append();
  	};

  	// indexObj.request(indexView,render);
  	module.indexView = indexView;

})(window);
