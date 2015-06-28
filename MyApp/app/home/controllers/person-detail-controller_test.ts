///<reference path='../../../typings/tsd.d.ts' />

/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('PersonDetailCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('PersonDetailCtrl');
  }));

  //it('should have ctrlName as PersonDetailCtrl', function () {
  //  expect(ctrl.ctrlName).toEqual('PersonDetailCtrl');
  //});

});
