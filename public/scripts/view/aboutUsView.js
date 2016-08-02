(function(module) {
  var aboutUsView = {};
  var aboutCompiler = Handlebars.compile($('#about-template').text());
  aboutUsView.render = function() {

  };
  module.aboutUsView = aboutUsView;
})(window);
