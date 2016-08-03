
(function(module) {

	page('/', indexController.index);
	page('/search', searchController.index);
	page('/aboutEveOnline', aboutEveController.index);
	page('/aboutUs', aboutUsController.index);
	page('/single', singleController.index);
	page('/customize', customizeController.index);
	page('/dashboard', dashboardController.index);

	page();

})(window);