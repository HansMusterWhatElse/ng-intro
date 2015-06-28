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

    public static $inject = ['$routeParams', '$http'];

    // dependencies are injected via AngularJS $injector
    constructor($routeParams : IPersonalDetailRouteParams, private $http : ng.IHttpService) {
      var vm = this;
      vm.ctrlName = 'PersonDetailCtrl';

      this.personId = $routeParams.personId;

      this.$http.get('/data/data.json').then((data : any) =>
      {
        this.person = data.data[this.personId - 1];
      });
    }


  }

  angular
    .module('home')
    .controller('PersonDetailCtrl', PersonDetailCtrl);
}
