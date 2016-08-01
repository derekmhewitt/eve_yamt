(function(module) {

	var eveData = {};



	eveData.pullEveData = function() {
		$.get('/eve-central/api/marketstat/json?' + eveCategories.ores)
		.done(function(data){
			console.log(data);
		});
	};

	eveData.pullEveData();

	module.eveData = eveData;

})(window);