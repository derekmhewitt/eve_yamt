(function(module) {

	var eveData = {};

	var frontPageObjects = [];
	var marketplaceObjects = [];

	eveData.frontPageData = function() {
		$.get('/eve-central/api/marketstat/json?hours=1&typeid=37&typeid=16272&typeid=16683&typeid=1227')
		.done(function(oneHourData) {
			oneHourData.map(function(oneHour) {
				$.get('/eve-central/api/marketstat/json?hours=2&typeid=' + oneHour.all.forQuery.types[0])
				.done(function(twoHourData) {
					twoHourData.map(function(twoHour) {
						frontPageObjects.push({
							name: '',
							id: twoHour.all.forQuery.types[0],
							buyAvg: oneHour.buy.avg.toFixed(2),
							sellAvg: oneHour.sell.avg.toFixed(2),
							oneHourAvg: oneHour.all.avg.toFixed(2),
							twoHourAvg: twoHour.all.avg.toFixed(2)
						});
						console.log(frontPageObjects);
					});
				});
			});
		});
	};

	eveData.pullEveData = function() {
		$.get('/eve-central/api/marketstat/json?typeid=' + databaseID)
		.done(function(data){
			marketplaceObjects.push({
				name: '',
				id: databaseID,
				avg: data[0].all.avg.toFixed(2),
				max: data[0].all.max.toFixed(2),
				min: data[0].all.min.toFixed(2)
			});
			// console.log(marketplaceObjects);
		});
	};

	eveData.frontPageData();

	module.eveData = eveData;

})(window);