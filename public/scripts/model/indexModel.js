
(function(module) {

	var indexData = {};

	var indexObjects = [];
	var indexQuery = [
		{
		    "idNum": "16",
		    "itemName": "Stargate (Caldari System)"
		},
		{
    		"idNum": "17",
    		"itemName": "Stargate (Amarr Constellation)"
  		},
  		{
		    "idNum": "18",
		    "itemName": "Plagioclase"
	  	},
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
		},
		{
		    "idNum": "23",
		    "itemName": "Cargo Container"
		}
	];

	indexData.displayDataObject = function() {
		indexQuery.map(function(queryObject) {
			$.get('/eve-central/api/marketstat/json?hours=1&typeid=' + queryObject.idNum)
			.done(function(oneHourData) {
				oneHourData.map(function(oneHour) {
					$.get('/eve-central/api/marketstat/json?hours=2&typeid=' + queryObject.idNum)
					.done(function(twoHourData) {
						twoHourData.map(function(twoHour) {
							indexObjects.push({
								name: 		queryObject.itemName,
								id: 		twoHour.all.forQuery.types[0],
								buyAvg: 	oneHour.buy.avg.toFixed(2),
								sellAvg: 	oneHour.sell.avg.toFixed(2),
								oneHourAvg: oneHour.all.avg.toFixed(2),
								twoHourAvg: twoHour.all.avg.toFixed(2)
							});
							console.log('ajax call made', indexObjects);
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