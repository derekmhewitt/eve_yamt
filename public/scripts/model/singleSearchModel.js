
(function(module) {

	var singleSearchModel = {};

	singleSearchModel.displayDataObject = function() {
		var singleQuery = {
			"idNum": "34",
			"itemName": "Tritanium"
		};
		$.get('http://api.eve-central.com/api/marketstat/json?hours=1&typeid=' + singleQuery.idNum)
		.done(function(oneHour) {
			$.get('http://api.eve-central.com/api/marketstat/json?hours=2&typeid=' + singleQuery.idNum)
			.done(function(twoHour) {
				var singleCurrentObject = {
					name: singleQuery.itemName,
					id: singleQuery.idNum,
					oneHourAvg: oneHour[0].all.avg.toFixed(2),
					twoHourAvg: twoHour[0].all.avg.toFixed(2),
					allMax: oneHour[0].all.max.toFixed(2),
					allAvg: oneHour[0].all.avg.toFixed(2),
					allMin: oneHour[0].all.min.toFixed(2),
					buyMax: oneHour[0].buy.max.toFixed(2),
					buyAvg: oneHour[0].buy.avg.toFixed(2),
					buyMin: oneHour[0].buy.min.toFixed(2),
					sellMax: oneHour[0].sell.max.toFixed(2),
					sellAvg: oneHour[0].sell.avg.toFixed(2),
					sellMin: oneHour[0].sell.min.toFixed(2)
				};
				singleSearchView.render(singleCurrentObject);
			});
		});
	};

	singleSearchModel.displayDataObject();

	module.singleSearchModel = singleSearchModel;

})(window);
