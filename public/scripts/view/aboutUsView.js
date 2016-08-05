(function(module) {

  var aboutUsView = {};
  var aboutCompiler = Handlebars.compile($('#about-template').text());

  aboutUsView.renderInfo = function() {
    $('').empty.append();
  };

  module.aboutUsView = aboutUsView;
})(window);
