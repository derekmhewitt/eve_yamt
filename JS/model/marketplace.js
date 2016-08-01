(function() {

	var eveData = {};

	eveData.pullEveData = function() {
		$.get('/eve-central/api/marketstat/json?typeid=35')
		.done(function(data){
			console.log(data);
		});
	}

	eveData.pullEveData();

	module.eveData = eveData;

})(window);