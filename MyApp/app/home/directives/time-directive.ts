///<reference path='../../../typings/tsd.d.ts' />
module Home.Directive {
  'use strict';

  angular
    .module('home')
    .directive('time', time);

  function time($interval : ng.IIntervalService, $filter : ng.IFilterService): ng.IDirective {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'home/directives/time-directive.tpl.html',
      replace: false,
      controllerAs: 'time',
      controller: () => {
      },
      link: (scope: ng.IScope, element: JQuery, attrs: any) => {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/

        var timeoutId : any;
        var format : string = 'd.M.yyyy H:mm:ss';

        var dateFilter = $filter('date');

        function updateTime() {
          element.text(dateFilter(new Date(), format));
        }

        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });

        timeoutId = $interval(function() {
          updateTime(); // update DOM
        }, 1000);
      }
    };
  }
}
