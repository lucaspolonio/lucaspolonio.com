describe('Unit: timelineController', function() {

  beforeEach(module('cvApp'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('timelineController', {
      $scope: scope
    });
  }));

})