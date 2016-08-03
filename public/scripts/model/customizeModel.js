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
      }
    );
  };

  customizeModel.validateItem = function() {
    var temp = customizeModel.queryResult;
    //pull itemId out and make a query to eve central with that id
    //check if that id returns a valid market item
    //if so, display results and show option to add to dashboard
    //if not say invalid search, please try again
  };
  module.customizeModel = customizeModel;
})(window);
