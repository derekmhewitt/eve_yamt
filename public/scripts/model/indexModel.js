
(function(module) {

	var indexData = {};

	var indexObjects = [];
	var indexQuery = [
		{
		    "idNum": "19",
		    "itemName": "Spodumain"
		},
		{
    		"idNum": "20",
    		"itemName": "Kernite"
  		},
  		{
    		"idNum": "21",
    		"itemName": "Hedbergite"
  		},
  		{
    		"idNum": "22",
    		"itemName": "Arkonor"
  		}
	];

	indexData.displayDataObject = function(nextFunction) {
		indexQuery.map(function(queryObject) {
			var indexCurrentObject = {};
			$.get('/eve-central/api/marketstat/json?hours=1&typeid=' + queryObject.idNum)
			.done(function(oneHourData) {
				oneHourData.map(function(oneHour) {
					$.get('/eve-central/api/marketstat/json?hours=2&typeid=' + queryObject.idNum)
					.done(function(twoHourData) {
						twoHourData.map(function(twoHour) {
							indexCurrentObject = {
								name: 		queryObject.itemName,
								id: 		twoHour.all.forQuery.types[0],
								buyAvg: 	oneHour.buy.avg.toFixed(2),
								sellAvg: 	oneHour.sell.avg.toFixed(2),
								oneHourAvg: oneHour.all.avg.toFixed(2),
								twoHourAvg: twoHour.all.avg.toFixed(2)
							};
							indexView.render(indexCurrentObject);
						});
					});
				});
			});
		});
	};

	indexData.displayDataObject();

	module.indexData = indexData;
	module.indexObjects = indexObjects;

})(window);
