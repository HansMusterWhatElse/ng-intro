///<reference path='../../../typings/tsd.d.ts' />
module Home.Controllers {
  'use strict';

  class HomeCtrl {

    ctrlName: string;
    persons : Array<Home.Data.IPerson>;
    query: string;

    public static $inject = ['$log', '$location', '$http'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService, private $location : ng.ILocationService, private $http : ng.IHttpService) {
      var vm = this;
      vm.ctrlName = 'HomeCtrl';

      this.$log.debug('home controller called');
    }

    showDetail(person : Home.Data.IPerson) {
      this.$log.debug('clicked on person id: ' + person.id);
      this.$location.path('/PersonDetail/' + person.id);
    }

    load() {

      this.$http.get('/data/data.json').then((data : any) =>
      {
        this.persons = data.data;
      });

      this.$log.debug('load clicked');

    }
  }


  /**
  * @ngdoc object
  * @name home.controller:HomeCtrl
  *
  * @description
  *
  */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);
}
