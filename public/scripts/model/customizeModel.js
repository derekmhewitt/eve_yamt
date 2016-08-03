(function(module){
  var customizeModel = {};
  //Use Jquery to grab text box element and store it.
  //Event handler for input that searches the Firebase database and stores result.
  customizeModel.itemData = firebase.database().ref('itemData');
  customizeModel.searchQuery = null;
  customizeModel.queryResult = null;
  //needs to be a listener on this value
  $('#customize-form').on('click', function(){
    customizeModel.searchQuery = $('#customize-input').value;
    customizeModel.findItem(customizeModel.searchQuery);
  });

  customizeModel.findItem = function(searchQuery) {
    query = database.ref('/itemData/').orderByChild('itemName').equalTo(searchQuery).once('value').then(
      function(data) {
        console.log(data.val());
        customizeModel.queryResult = data.val();
      }
    );
  };
  module.customizeModel = customizeModel;
})(window);
