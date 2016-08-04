
(function(module) {

  var customizeView = {};
  var customizeCompiledSource = $('#customize-template').html();
  var customizeCompiledContent = Handlebars.compile(customizeCompiledSource);

  customizeView.renderCustomize = function(data) {
    $('#customize-append').empty();
    $('#customize-add-dashboard').show();
    $('#customize-append').append(customizeCompiledContent(data));
  };

  // customizeObj.request(customizeView.renderCustomize);
  module.customizeView = customizeView;

})(window);
