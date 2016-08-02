
(function(module){

  	var aboutEveView = {};
  	var aboutEveCompiler = Handlebars.compile($('#aboutEve-template').text());
  	
  	aboutEveView.renderEve = function() {
  		$('').empty.append();
  	};
  
  	// aboutEveObj.request(aboutEveView,renderEve);
  	module.aboutEveView = aboutEveView;

})(window);
