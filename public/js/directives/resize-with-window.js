app.directive('ngResizeWithWindow', function($window) {
  return function($scope) {
    $scope.initializeWindowWidth = function() {
      return $scope.windowWidth = $window.innerWidth;
    };
    $scope.initializeWindowWidth();
    return angular.element($window).bind('resize', function() {
      return $scope.$apply(function (){
        $scope.initializeWindowWidth();
      });
    });
  };
});