
(function(module) {

	var indexView = {};
	var indexSource = $('#index-template').html();
	var indexContent = Handlebars.compile(indexSource);

	indexView.render = function(currentObject) {
		if(currentObject.oneHourAvg < currentObject.twoHourAvg) {
			currentObject.symbol = '<h3 id="upArrow"></h3>';
		} else if(currentObject.oneHourAvg > currentObject.twoHourAvg) {
			currentObject.symbol = '<h3 id="downArrow"></h3>';
		} else {
			currentObject.symbol = '<h3 id="exclamation-circle"></h3>';
		}
		$('#home').append(indexContent(currentObject));
  };

  	module.indexView = indexView;

})(window);
