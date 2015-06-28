/*global describe, beforeEach, it, browser, expect */
'use strict';

var PersonDetailPagePo = require('./person-detail.po');

describe('Person detail page', function () {
  var personDetailPage;

  beforeEach(function () {
    personDetailPage = new PersonDetailPagePo();
    browser.get('/#/PersonDetail');
  });

  it('should say PersonDetailCtrl', function () {
    expect(personDetailPage.heading.getText()).toEqual('personDetail');
    expect(personDetailPage.text.getText()).toEqual('PersonDetailCtrl');
  });
});
