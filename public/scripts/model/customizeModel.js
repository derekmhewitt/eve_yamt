(function(module){
  var customizeModel = {};
  //Use Jquery to grab text box element and store it.
  //Event handler for input that searches the Firebase database and stores result.

  customizeModel.itemData = firebase.database().ref('itemData');
  module.customizeModel = customizeModel;
})(window);
