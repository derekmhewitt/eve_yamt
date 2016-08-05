(function(module) {

  var customizeView = {};
  var customizeCompiledSource = $('#customize-template').html();
  var customizeCompiledContent = Handlebars.compile(customizeCompiledSource);

  customizeView.renderCustomize = function(data) {
    $('#customize-append').empty();
    $('#customize-add-dashboard').show();
    $('#customize-append').append(customizeCompiledContent(data));
  };

  $('#hide-customize').on('click', function(event) {
    event.preventDefault();
    console.log('clicked!');
    $('#customize').toggleClass('hidden');
  });

  module.customizeView = customizeView;
})(window);
