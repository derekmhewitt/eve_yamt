
(function(module) {

  var singleSearchModel = {};

	$('#single-button').on('click', function(event) {
		event.preventDefault();
		singleSearchModel.queryValue = $('#single').val();
		singleSearchModel.queryDatabase(singleSearchModel.queryValue);
	});

  singleSearchModel.queryDatabase = function(queryValue) {
    database.ref('/itemData/').orderByChild('itemName').equalTo(queryValue).once('value').then(
      function(data) {
        singleSearchModel.queryResult = data.val();
        singleSearchModel.validateItem();
      }
    );
  };

  singleSearchModel.validateItem = function() {
    singleSearchModel.currentQueryId = singleSearchModel.queryResult[Object.keys(singleSearchModel.queryResult)[0]].idNum;
    singleSearchModel.currentQueryName = singleSearchModel.queryResult[Object.keys(singleSearchModel.queryResult)[0]].itemName;
    $.get('https://api.eve-central.com/api/marketstat/json?hours=1&typeid=' + singleSearchModel.currentQueryId).done(function(data) {
      if(data[0].all.avg > 0) {
        singleSearchModel.displayDataObject(data);
      } else {
        $('#single-search-append').empty();
        $('#single-search-append').html('Sorry that item is not for sale!');
      };
    });
  };

  singleSearchModel.displayDataObject = function(oneHour) {
    $.get('https://api.eve-central.com/api/marketstat/json?hours=2&typeid=' + singleSearchModel.currentQueryId).done(function(twoHour) {
      var singleCurrentObject = {
        name: singleSearchModel.currentQueryName,
        id: singleSearchModel.currentQueryId,
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
  };

  module.singleSearchModel = singleSearchModel;
})(window);
