app.directive('ngTimelineChart', function() {
  return {
    restrict: 'A',
    link: function($scope, $elm, $attr) {
      // Create the data table and optons hash
      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: 'string', id: 'Skill' });
      dataTable.addColumn({ type: 'date', id: 'Start' });
      dataTable.addColumn({ type: 'date', id: 'End' });

      dataTable.addRows([
        [ 'Ruby on Rails', new Date(2013, 0, 1), new Date() ],
        [ 'AngularJS', new Date(2013, 0, 1), new Date() ],
        [ 'JS+jQuery', new Date(2010, 10, 1),  new Date() ],
        [ 'Android', new Date(2013, 0, 1),  new Date(2014, 3, 1) ],
        [ 'iOS', new Date(2011, 4, 1),  new Date(2012, 2, 1) ],
        [ 'iOS', new Date(2012, 11, 1),  new Date(2013, 4, 1) ],
        [ 'iOS', new Date(2014, 0, 1),  new Date(2014, 3, 1) ],
        [ 'PHP', new Date(2010, 10, 1),  new Date() ],
        [ 'C/C++', new Date(2010, 10, 1),  new Date(2011, 5, 30) ]
      ]);

      var options = {
        // backgroundColor: '00000000',
        colors: ['#2A617F','#63AACD'],
        avoidOverlappingGridLines: false,
        timeline: {
          colorByRowLabel: true,
          rowLabelStyle: { fontSize: 11, color: '#603913' },
          barLabelStyle: { fontName: 'Helvetica', fontSize: 6 }
        }
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.Timeline($elm[0]);
      chart.draw(dataTable, options);

      // Watches for changes on scope variable windowWidth and redraws the chart to be responsive
      $scope.$watch('windowWidth', function(){
        chart.draw(dataTable, options);
      });
    }
  }
});
