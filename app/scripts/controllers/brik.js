'use strict';

/**
 * @ngdoc function
 * @name controllerQuizApp.controller:BrikCtrl
 * @description
 * # BrikCtrl
 * Controller of the controllerQuizApp
 */
angular.module('controllerQuizApp')
  .controller('BrikCtrl', function () {
    this.color = 'Green';
    this.size = '2 x 6';
    this.price = 0.03;
    this.quantity = 697;
  });
