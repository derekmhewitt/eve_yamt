
(function(module){

  var aboutEveOnlineView = {};
  var aboutEveCompiler = Handlebars.compile($('#aboutEve-template').text());

  aboutEveOnlineView.renderEve = function() {
    $('').empty.append();
  };

  // aboutEveObj.request(aboutEveView,renderEve);
  module.aboutEveOnlineView = aboutEveOnlineView;

})(window);
