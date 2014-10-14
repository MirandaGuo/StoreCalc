'use strict';

/**
 * @ngdoc overview
 * @name storeCalcApp
 * @description
 * # storeCalcApp
 *
 * Main module of the application.
 */
var storeCalcApp = angular
  .module('storeCalcApp', 
  	['ngRoute', 
  	 'storeCalcControllers',
     'storeCalcServices'

  	]);

storeCalcApp.config(['$routeProvider', function($routeProvider){

      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/Detail', {
      	templateUrl: 'views/partials/storeCalcForm.html',
      	controller: 'storeCalcFormCtrl'
      })
      .when('/Products', {
      	templateUrl: 'views/partials/storeCalcSummary.html',
      	controller: 'storeCalcListCtrl'
      })
      .when('/Shipping', {
        templateUrl:'views/partials/shippingCalcForm.html',
        controller:'shppingCalcCtrl'
      })
      .otherwise({
      	redirectTo:'/#'
      });
}]);
