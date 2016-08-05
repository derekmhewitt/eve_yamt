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
      }).done(function() {
        dashboardView.renderDashboard(dashboardModel.finishedData);
      });
    });
  };

  module.dashboardModel = dashboardModel;
})(window);
