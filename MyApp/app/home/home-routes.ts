///<reference path='../../typings/tsd.d.ts' />
module home {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'home/views/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/PersonDetail/:personId', {
        templateUrl: 'home/views/person-detail.tpl.html',
        controller: 'PersonDetailCtrl',
        controllerAs: 'personDetail'
      });
  }
}
