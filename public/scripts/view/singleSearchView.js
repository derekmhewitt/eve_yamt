
(function(module) {

  var singleSearchView = {};
  var singleSearchSource = $('#single-search-template').html();
  var singleSearchContent = Handlebars.compile(singleSearchSource);

  singleSearchView.render = function(currentObject) {
    $('#single-search-append').empty();

    if(currentObject.oneHourAvg < currentObject.twoHourAvg) {
      currentObject.symbol = '<i class="fa-arrow-up:before" aria-hidden="true"></i>';
    } else if(currentObject.oneHourAvg > currentObject.twoHourAvg) {
      currentObject.symbol = '<i class="fa-arrow-down:before" aria-hidden="true"></i>';
    } else {
      currentObject.symbol = '<i class="fa-exclamation-circle:before" aria-hidden="true"></i>';
    }
    $('#single-search-append').append(singleSearchContent(currentObject));
  };

  module.singleSearchView = singleSearchView;

})(window);
