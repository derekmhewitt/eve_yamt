
(function(module) {
  	
  	var indexView = {};
  
  	indexView.render = function() {
	  	var indexSource = $('#index-template').html();
	  	var indexContent = Handlebars.compile(indexSource);
	  	console.log(indexObjects);

	  	indexObjects.map(function(currentObject) {
	  		if(currentObject.oneHourAvg < currentObject.twoHourAvg) {
	  			currentObject.symbol = '<h3 id="upArrow"></h3>';
	  		} else if(currentObject.oneHourAvg > currentObject.twoHourAvg) {
	  			currentObject.symbol = '<h3 id="downArrow"></h3>';
	  		} else {
	  			currentObject.symbol = '<h3 id="exclamation-circle"></h3>';
	  		}
	  		$('#home').append(indexContent(currentObject));
	  	});
	};

	indexView.render();

  	module.indexView = indexView;

})(window);
