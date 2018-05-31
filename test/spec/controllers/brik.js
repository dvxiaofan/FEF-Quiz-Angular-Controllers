'use strict';

describe('Controller: BrikCtrl', function () {

  // load the controller's module
  beforeEach(module('controllerQuizApp'));

  var BrikCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BrikCtrl = $controller('BrikCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BrikCtrl.awesomeThings.length).toBe(3);
  });
});
