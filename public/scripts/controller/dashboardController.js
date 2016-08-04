
(function(module){

  var dashboardController = {
    index: function() {
      $('.tab-content').hide();
      $('#dashboard').fadeIn(350);
    }
  };

  dashboardController.listener = function() {
    database.ref('/users/' + loginController.user.uid + '/dashboard/').on('value', function(data) {
      console.log(data.val());
      //set data.val to a temp variable
      //run through that temp variable with a forEach where we construct our handlebars compatibale objects and store them.
      //then call it.
      var zebraArray = [];
      var zebra = data.val();
      console.log('this is zebra', zebra);
      for(prop in zebra){
        console.log(zebra[prop]);
        zebraArray.push(zebra[prop]);
      };

      // zebra.forEach(function(current, index, array){
      //   var temp = {
      //     id: data[Object.keys(data)[0]].idNum,
      //     name: data[Object.keys(data)[0]].itemName
      //   };
      //   console.log(temp);
      //   zebraArray.push(current);
      // });
      console.log('this is zebra array', zebraArray);
      dashboardModel.processData(zebraArray);
    });
  };

  module.dashboardController = dashboardController;

})(window);
