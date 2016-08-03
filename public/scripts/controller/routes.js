
(function(module) {

  page('/', indexController.index);
  page('/user-page', userController.index);
  page('/about-eve', aboutEveController.index);
  page('/about-us', aboutUsController.index);
  page('/single-search', singleSearchController.index);
  page('/customize', customizeController.index);
  page('/dashboard', dashboardController.index);
  page('/login', loginController.index);

  page('#', indexController.index);
  page('*', indexController.index);

  page();

})(window);
