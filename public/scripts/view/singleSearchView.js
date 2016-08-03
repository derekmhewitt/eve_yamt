
(function(module) {

	var singleSearchView = {};
	var singleSearchSource = $('#single-search-template').html();
	var singleSearchContent = Handlebars.compile(singleSearchSource);

	singleSearchView.render = function(currentObject) {
		if(currentObject.oneHourAvg < currentObject.twoHourAvg) {
			currentObject.symbol = '<h3 id="upArrow"></h3>';
		} else if(currentObject.oneHourAvg > currentObject.twoHourAvg) {
			currentObject.symbol = '<h3 id="downArrow"></h3>';
		} else {
			currentObject.symbol = '<h3 id="exclamation-circle"></h3>';
		}
		$('#single-search').append(singleSearchContent(currentObject));
  };

	module.singleSearchView = singleSearchView;

})(window);
