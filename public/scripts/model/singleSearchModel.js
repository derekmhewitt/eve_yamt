
(function(module) {

  var singleSearchModel = {};

	$('#single-button').on('click', function(event) {
		event.preventDefault();
		console.log('singleSearchModel click');
		singleSearchModel.queryValue = $('#single').val();
		console.log(singleSearchModel.queryValue);
		singleSearchModel.queryDatabase(singleSearchModel.queryValue);
	});

  singleSearchModel.queryDatabase = function(queryValue) {
    console.log('queryDatabase function', queryValue);
    database.ref('/itemData/').orderByChild('itemName').equalTo(queryValue).once('value').then(
      function(data) {
        console.log('this is data.val()', data.val());
        singleSearchModel.queryResult = data.val();
        singleSearchModel.validateItem();
      }
    );
  };

  singleSearchModel.validateItem = function() {
    singleSearchModel.currentQueryId = singleSearchModel.queryResult[Object.keys(singleSearchModel.queryResult)[0]].idNum;
    singleSearchModel.currentQueryName = singleSearchModel.queryResult[Object.keys(singleSearchModel.queryResult)[0]].itemName;
    console.log(singleSearchModel.currentQueryId);
    console.log(singleSearchModel.currentQueryName);
    //pull itemId out and make a query to eve central with that id
    $.get('https://api.eve-central.com/api/marketstat/json?hours=1&typeid=' + singleSearchModel.currentQueryId).done(function(data) {
      console.log(data);
      console.log(data[0].all.avg);
      if(data[0].all.avg > 0) {
        singleSearchModel.displayDataObject(data);
      } else {
        console.log('not a valid search');
        //display a message that your search result is a valid item, but unfortunately it's not for sale in EVE Online and do not render any data
      };
    });
  };

  singleSearchModel.displayDataObject = function(oneHour) {
    // $.get('https://api.eve-central.com/api/marketstat/json?hours=1&typeid=' + xxx.idnum)
    // .done(function(oneHour) {
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
    // });
  };
	// singleSearchModel.displayDataObject();

  module.singleSearchModel = singleSearchModel;
})(window);
