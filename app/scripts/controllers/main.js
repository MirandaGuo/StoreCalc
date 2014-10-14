'use strict';

/**
 * @ngdoc function
 * @name storeCalcApp.controller:storeCalcControllers
 * @description
 * # storeCalcControllers
 * Controller of the storeCalcApp
 */
 var storeCalcControllers = angular.module('storeCalcControllers', ['ngGrid']);

  storeCalcControllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Store Calculator',
      'AngularJS',
      'Karma'
    ];

    $scope.navGroups = [
    { 
      'url': '#/',
      'name': 'Home'
    },
    {
      'url': '#/Detail',
      'name': 'Product Calc'
    },

    {
      'url': '#/Shipping',
      'name':'Shipping Calc'
    },
    {
      'url': '#/Products',
      'name': 'Product List'
    }
    ];

    $scope.navClass = function(navItem){

         this.currentPage =  $(location).attr('hash');
          return {
            active: navItem.url && this.currentPage == navItem.url         
           };
    }

  });

  storeCalcControllers.controller('storeCalcFormCtrl', ['$scope', 'ProductTypes', 'productService',
    function($scope, ProductTypes, productService){

    //$scope.product = {};
    $scope.currency = 6.2;
   // $scope.product.rmbTotal = 0.0;
   $scope.product = productService.getProduct();
          
      $scope.types = ProductTypes;


      
  
      
       $scope.calculateCost = function(){
         $scope.product.cost =($scope.product.price * (1 + Number($scope.tax))).toFixed(3);

         $scope.product.total = (Number($scope.product.cost) + Number($scope.product.shippingCost)).toFixed(3);

         $scope.product.rmbTotal =(Number($scope.currency) * Number($scope.product.total)).toFixed(3);
        
         productService.setProduct($scope.product);
       };

       $scope.calProfit = function(value, times){
          return Number(Number(value) * times).toFixed(3);

       };

       $scope.resetAll = function(){

           $scope.product = {};
         productService.setProduct( $scope.product );

       };

       $scope.addToList = function(){
             //TODO: save Data
       };


  }]);

  storeCalcControllers.controller('storeCalcListCtrl', ['$scope', '$http', function($scope, $http){
       $scope.products =[];
       $http.get('products/products.json').success(function(data){

            $scope.products = data;

        });

       $scope.gridOptions = {
          data: 'products',
          columnDefs: [
          { field: 'imageUrl', width: '50', displayName: 'IMG', cellTemplate: '<img ng-src="{{ row.getProperty(col.field) }}">'},       
          { field: 'shortName',  width: '150', displayName: 'Name'},
          { field: 'type', width: '80', displayName: 'Type'},
          { field: 'price',  width: '60', displayName: 'Price'},         
          { field: 'shipCost',  width: '100',  displayName: 'Shipping Cost'},
           { field: 'total',  width: '80', displayName: 'Total'},
          { field: 'suggestPrice',  displayName: 'Suggest Price (RMB)'}
         
          ]
      };
  }]);

  storeCalcControllers.controller('shppingCalcCtrl', ['$scope', '$http', 'ProductTypes', function($scope, $http, ProductTypes){

      $scope.types = ProductTypes;



  }]);
