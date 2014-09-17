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

  it('should find the months for a year', function() {
      dates = [ [2014,[1,2]], [2015,[3,4]], [2016, [5,6]] ];
      expect(scope.months_by_year(dates, 2014)).toEqual([1,2]);
      expect(scope.months_by_year(dates, 2015)).toEqual([3,4]);
      expect(scope.months_by_year(dates, 2016)).toEqual([5,6]);
  });

  it('should format skills dates array', function() {
      dates = [ [2003,[0,1,2,3,4,5,6,7,8,9,10,11]], [2005,[0,1,2,3,4,5,6,7,8]] ];
      expect(scope.format_skill_dates(dates)[0][10]).toEqual(1);
      expect(scope.format_skill_dates(dates)[0][1]).toEqual(1);
      expect(scope.format_skill_dates(dates)[1][1]).toEqual(0);
      expect(scope.format_skill_dates(dates)[2][7]).toEqual(1);
      expect(scope.format_skill_dates(dates)[2][10]).toEqual(0);
  });

})
 