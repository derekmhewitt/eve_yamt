
(function(module) {
  var customizeView = {};
  var customizeCompiler = Handlebars.compile($('#customize-template').text());
  customizeView.renderCustomize = function() {
    $('').empty().append(   .withTheAttribute('name').map(customizeCompiler));
  };
  customizeObj.request(customizeView.renderCustomize);
  module.customizeView = customizeView;

})(window);
