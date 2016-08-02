(function(module) {

	var indexData = {};
	var indexObjects = [];

	var dataQuery = [
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
  		}
	];

	indexData.frontPageData = function() {
		dataQuery.map(function(item) {
			$.get('/eve-central/api/marketstat/json?hours=1&typeid=' + item.idNum)
			.done(function(oneHourData) {
				oneHourData.map(function(oneHour) {
					$.get('/eve-central/api/marketstat/json?hours=2&typeid=' + item.idNum)
					.done(function(twoHourData) {
						twoHourData.map(function(twoHour) {
							indexObjects.push({
							name: item.itemName,
							id: twoHour.all.forQuery.types[0],
							buyAvg: oneHour.buy.avg.toFixed(2),
							sellAvg: oneHour.sell.avg.toFixed(2),
							oneHourAvg: oneHour.all.avg.toFixed(2),
							twoHourAvg: twoHour.all.avg.toFixed(2)
							});
							console.log(indexObjects);
						});
					});
				});
			});
		});
	};

	module.indexData = indexData;

})(window);