(function(module) {

	var eveData = {};

	var frontPageObjects = [];

	var databaseID = '35';

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
							oneHourAvg: oneHour.all.avg.toFixed(2),
							twoHourAvg: twoHour.all.avg.toFixed(2)
						});
					});
				});
			});
		});
	};

	eveData.pullEveData = function() {
		$.get('/eve-central/api/marketstat/json?typeid=' + databaseID)
		.done(function(data){
			console.log(data);
			console.log('all avg:', (data[0].all.avg).toFixed(2), 'all max', (data[0].all.max).toFixed(2), 'all min', (data[0].all.min).toFixed(2));
			console.log('buy avg:', (data[0].buy.avg).toFixed(2), 'buy max', (data[0].buy.max).toFixed(2), 'buy min', (data[0].buy.min).toFixed(2));
			console.log('sell avg:', (data[0].sell.avg).toFixed(2), 'sell max', (data[0].sell.max).toFixed(2), 'sell min', (data[0].sell.min).toFixed(2));
		});
	};

	eveData.frontPageData();

	module.eveData = eveData;

})(window);