(function(module){
  var customizeModel = {};
  //Use Jquery to grab text box element and store it.
  //Event handler for input that searches the Firebase database and stores result.
  customizeModel.itemData = firebase.database().ref('itemData');
  customizeModel.searchQuery = null;
  customizeModel.queryResult = null;
  //needs to be a listener on this value
  $('#customize-button').on('click', function(event){
    event.preventDefault();
    customizeModel.searchQuery = $('#customize-input').val();
    customizeModel.findItem(customizeModel.searchQuery);
  });

  customizeModel.findItem = function(searchQuery) {
    console.log(searchQuery);
    database.ref('/itemData/').orderByChild('itemName').equalTo(searchQuery).once('value').then(
      function(data) {
        console.log(data.val());
        customizeModel.queryResult = data.val();
        customizeModel.validateItem();
      }
    );
  };

  customizeModel.validateItem = function() {
    var temp = customizeModel.queryResult[Object.keys(customizeModel.queryResult)[0]].idNum;
    var temp2 = customizeModel.queryResult[Object.keys(customizeModel.queryResult)[0]].itemName;

    console.log(temp);
    //pull itemId out and make a query to eve central with that id
    $.get('https://api.eve-central.com/api/marketstat/json?hours=1&typeid=' + temp).done(function(data) {
      console.log(data);
      console.log(data[0].all.avg);
      if(data[0].all.avg > 0) {
        var currentCustomizeObject = {
          name: temp2,
          id: temp,
          min: data[0].all.min.toFixed(2),
          max: data[0].all.max.toFixed(2),
          avg: data[0].all.avg.toFixed(2)
        };
        customizeView.renderCustomize(currentCustomizeObject);
        //display item to user using handlebars and present button to add item to their dashboard
      } else {
        $('#customize-append').empty();
        $('#customize-add-dashboard').hide();
        $('#customize-append').html('Sorry that item is not for sale!');
        //display a message that your search result is a valid item, but unfortunately it's not for sale in EVE Online
      }
    });
    //check if that id returns a valid market item
    //if so, display results and show option to add to dashboard
    //if not say invalid search, please try again
  };
  module.customizeModel = customizeModel;
})(window);
