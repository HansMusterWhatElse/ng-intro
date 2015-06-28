///<reference path='../../../typings/tsd.d.ts' />
module Home.PersonDetailCtrl {
  'use strict';

  interface IPersonalDetailRouteParams extends ng.route.IRouteParamsService {
    personId: string;
  }

  class PersonDetailCtrl {

    ctrlName: string;
    personId: string;
    person: Home.Data.IPerson;

    public static $inject = ['$routeParams', '$http', 'Repository'];

    // dependencies are injected via AngularJS $injector
    constructor($routeParams : IPersonalDetailRouteParams, private $http : ng.IHttpService, private repository : Home.Services.IRepository) {
      var vm = this;
      vm.ctrlName = 'PersonDetailCtrl';

      this.person = repository.getPerson(parseInt($routeParams.personId));
    }


  }

  angular
    .module('home')
    .controller('PersonDetailCtrl', PersonDetailCtrl);
}
