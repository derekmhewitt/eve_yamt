
(function(module) {

	var singleData = {};

	var singleObjects = [];
	var singleQuery = {};

	singleData.displayDataObject = function() {
		$.get('/eve-central/api/marketstat/json?typeid=' + singleQuery.idNum)
		.done(function(costData){
			singleObjects.push({
				name: 	singleQuery.itemName,
				id: 	singleQuery.idNum,
				avg: 	costData[0].all.avg.toFixed(2),
				max: 	costData[0].all.max.toFixed(2),
				min: 	costData[0].all.min.toFixed(2)
			});
			// console.log(singleObjects);
		});
	};

	module.singleData = singleData;

})(window);