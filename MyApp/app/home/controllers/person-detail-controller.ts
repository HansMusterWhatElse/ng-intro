///<reference path='../../../typings/tsd.d.ts' />
module Home.PersonDetailCtrl {
  'use strict';

  interface IPersonalDetailRouteParams extends ng.route.IRouteParamsService {
    personId: string;
  }

  class PersonDetailCtrl {

    ctrlName: string;
    personId: string;

    public static $inject = ['$routeParams'];

    // dependencies are injected via AngularJS $injector
    constructor($routeParams : IPersonalDetailRouteParams) {
      var vm = this;
      vm.ctrlName = 'PersonDetailCtrl';

      this.personId = $routeParams.personId;
    }


  }

  angular
    .module('home')
    .controller('PersonDetailCtrl', PersonDetailCtrl);
}
