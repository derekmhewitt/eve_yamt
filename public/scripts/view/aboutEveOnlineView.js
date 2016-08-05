(function(module){
  var aboutEveOnlineView = {};

  var aboutEveCompiler = Handlebars.compile($('#aboutEve-template').text());

  aboutEveOnlineView.renderEve = function() {
    $('').empty.append();
  };

  module.aboutEveOnlineView = aboutEveOnlineView;
})(window);
