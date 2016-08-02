(function(module){
  var customizeModel = {};
  //Use Jquery to grab text box element and store it.
  //Event handler for input that searches the Firebase database and stores result.
  customizeModel.itemData = firebase.database().ref('itemData');

  //needs to be a listener on this value
  var searchQuery = $('#customize-input').value;

  customizeModel.findItem = function(searchQuery) {
    query = firebase.database().ref('/itemData/').equalTo('itemName' + searchQuery).once('value').then(
      function(data) {
        console.log(data.val());
      }
    );
  };
  module.customizeModel = customizeModel;
})(window);
