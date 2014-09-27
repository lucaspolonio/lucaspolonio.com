describe('Directive: timelineChart', function () {
  var element, scope, compile, defaultData,
      validTemplate = '<div ng-timeline-chart ></div>';

  function createDirective(data, template) {
    var elm;
    scope.data = data || defaultData;
    elm = compile(template || validTemplate)(scope);
    //scope.$apply(); // Trigger watchers
    return elm;
  }

  beforeEach(function () {
    module('cvApp');
    module(function ($provide) {
    });
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });
  });

  describe('when created', function () {
    it('should render the timeline chart', function () {
      element = createDirective();
      return expect(element.html()).toContain('chart');
    });
  });

});