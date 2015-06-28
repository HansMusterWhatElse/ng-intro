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
    onRouteChangeOff : any;
    modified: boolean = false;

    public static $inject = ['$routeParams', '$http', 'Repository', '$rootScope', '$window'];

    // dependencies are injected via AngularJS $injector
    constructor($routeParams : IPersonalDetailRouteParams, private $http : ng.IHttpService, private repository : Home.Services.IRepository, private $rootScope :ng.IRootScopeService, private $window : ng.IWindowService) {
      var vm = this;
      vm.ctrlName = 'PersonDetailCtrl';

      this.person = repository.getPerson(parseInt($routeParams.personId));

      this.onRouteChangeOff = this.$rootScope.$on('$locationChangeStart', (event, newUrl) => {
        this.onRouteChangeOff();

        //Navigate to newUrl if the form isn't dirty
        //if (!$scope.editForm.$dirty) return;
        if (!this.modified) {
          return;
        } else {
          this.$window.alert('Achtung Daten Modifiziert!');
        }

        event.preventDefault();
        return;
      });
    }
  }

  angular
    .module('home')
    .controller('PersonDetailCtrl', PersonDetailCtrl);
}
