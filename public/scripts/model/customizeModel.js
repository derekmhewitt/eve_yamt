(function(module){
  var customizeModel = {};
  customizeModel.itemData = firebase.database().ref('itemData');
  customizeModel.searchQuery = null;
  customizeModel.queryResult = null;

  $('#customize-button').on('click', function(event){
    event.preventDefault();
    customizeModel.searchQuery = $('#customize-input').val();
    customizeModel.findItem(customizeModel.searchQuery);
  });

  $('#customize-add-dashboard').on('click', function(event) {
    event.preventDefault();
    customizeModel.writeDataToFirebase();
  });

  customizeModel.writeDataToFirebase = function() {
    var itemData = {
      //these " are double quotes on purpose because we're JSONing them
      "idNum": customizeModel.currentQueryId,
      "itemName": customizeModel.currentQueryName
    };
    var user = firebase.auth().currentUser;
    var myRef = firebase.database().ref('/users/' + user.uid);
    console.log(itemData);
    myRef.child('dashboard').push(itemData);
  };

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
    customizeModel.currentQueryId = customizeModel.queryResult[Object.keys(customizeModel.queryResult)[0]].idNum;
    customizeModel.currentQueryName = customizeModel.queryResult[Object.keys(customizeModel.queryResult)[0]].itemName;
    $.get('https://api.eve-central.com/api/marketstat/json?hours=1&typeid=' + customizeModel.currentQueryId).done(function(data) {
      if(data[0].all.avg > 0) {
        var currentCustomizeObject = {
          name: customizeModel.currentQueryName,
          id: customizeModel.currentQueryId,
          min: data[0].all.min.toFixed(2),
          max: data[0].all.max.toFixed(2),
          avg: data[0].all.avg.toFixed(2)
        };
        customizeView.renderCustomize(currentCustomizeObject);
      } else {
        $('#customize-append').empty();
        $('#customize-add-dashboard').hide();
        $('#customize-append').html('Sorry that item is not for sale!');
      }
    });
  };
  module.customizeModel = customizeModel;
})(window);
