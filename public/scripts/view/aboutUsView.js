
(function(module) {

  var aboutUsView = {};
  var aboutCompiler = Handlebars.compile($('#about-template').text());

  aboutUsView.renderInfo = function() {
    $('').empty.append();
  };

  // aboutUsObj.requestInfo(aboutUsView, renderInfo);
  module.aboutUsView = aboutUsView;

})(window);
