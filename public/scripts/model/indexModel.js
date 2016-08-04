
(function(module) {

  var indexModel = {};

  var indexObjects = [];
  var indexQuery = [{
    'idNum': '29668',
  	'itemName': 'PLEX'
  },
    {
		'idNum': '40520',
  	'itemName': 'Skill Injector'
    },
    {
		'idNum': '40519',
  	'itemName': 'Skill Extractor'
    },
    {
		'idNum': '34',
  	'itemName': 'Tritanium'
    }];

  indexModel.displayDataObject = function() {
    indexQuery.map(function(currentQuery) {
      $.get('https://api.eve-central.com/api/marketstat/json?hours=1&typeid=' + currentQuery.idNum)
			.done(function(oneHour) {
  $.get('https://api.eve-central.com/api/marketstat/json?hours=2&typeid=' + currentQuery.idNum)
				.done(function(twoHour) {
  var indexCurrentObject = {
    name: currentQuery.itemName,
    id: currentQuery.idNum,
    buyAvg: oneHour[0].buy.avg.toFixed(2),
    sellAvg: oneHour[0].sell.avg.toFixed(2),
    oneHourAvg: oneHour[0].all.avg.toFixed(2),
    twoHourAvg: twoHour[0].all.avg.toFixed(2)
  };
  indexView.render(indexCurrentObject);
				});
			});
    });
  };

  indexModel.displayDataObject();

  module.indexModel = indexModel;
  module.indexObjects = indexObjects;

})(window);
