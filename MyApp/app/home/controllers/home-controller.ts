///<reference path='../../../typings/tsd.d.ts' />
module Home.Controllers {
  'use strict';

  class HomeCtrl {

    ctrlName: string;
    persons : Array<Home.Data.IPerson>;

    public static $inject = ['$log'];

    // dependencies are injected via AngularJS $injector
    constructor(private $log : ng.ILogService) {
      var vm = this;
      vm.ctrlName = 'HomeCtrl';

      this.$log.debug('home controller called');
    }

    load() {

      this.persons = [
        { "id": 1, "name": "Hoegger", "prename": "Andreas", "email": "ha@test.com" },
        { "id": 2, "name": "Dietrich", "prename": "Benno", "email": "db@test.ch" },
        { "id": 3, "name": "Koeferli", "prename": "Bruno", "email": "kb@test.com" }
      ];

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
