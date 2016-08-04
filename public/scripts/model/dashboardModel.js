(function(module) {
  dashboardModel = {};
  dashboardModel.finishedData;

  dashboardModel.processData = function(zebraArray) {
    $('#dashboard-append').empty();
    zebraArray.forEach(function(current, index, array) {
      $.get('https://api.eve-central.com/api/marketstat/json?hours=24&typeid=' + current.idNum).done(function(data) {
        dashboardModel.finishedData = {
          name: current.itemName,
          id: current.idNum,
          allMax: data[0].all.max.toFixed(2),
          allAvg: data[0].all.avg.toFixed(2),
          allMin: data[0].all.min.toFixed(2),
          buyMax: data[0].buy.max.toFixed(2),
          buyAvg: data[0].buy.avg.toFixed(2),
          buyMin: data[0].buy.min.toFixed(2),
          sellMax: data[0].sell.max.toFixed(2),
          sellAvg: data[0].sell.avg.toFixed(2),
          sellMin: data[0].sell.min.toFixed(2)
        };
        console.log('this is currentData', dashboardModel.finishedData);
        // dashboardModel.finishedData.push(currentData);
      }).done(function() {
        dashboardView.renderDashboard(dashboardModel.finishedData);
      });
    });
    // dashboardView.renderDashboard(dashboardModel.finishedData);
  };

  module.dashboardModel = dashboardModel;
})(window);

/*
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
  */
