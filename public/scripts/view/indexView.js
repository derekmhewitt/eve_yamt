(function(module) {
  var indexView = {};

  var indexSource = $('#index-template').html();
  var indexContent = Handlebars.compile(indexSource);

  indexView.render = function(currentObject) {
    if(currentObject.oneHourAvg < currentObject.twoHourAvg) {
      currentObject.symbol = '<i class="fa fa-arrow-up" aria-hidden="true"></i>';
    } else if(currentObject.oneHourAvg > currentObject.twoHourAvg) {
      currentObject.symbol = '<i class="fa fa-arrow-down" aria-hidden="true"></i>';
    } else {
      currentObject.symbol = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i>';
    }
    $('#home').append(indexContent(currentObject));
  };

  module.indexView = indexView;
})(window);
