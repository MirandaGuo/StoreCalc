
var storeCalcServices = angular.module('storeCalcServices', []);

storeCalcServices.factory('ProductTypes', function(){

 	var productTypes =  [
        {"name": "bag", "tax": 0.07, "priceWeight": 8},
        {"name": "clothes", "tax": 0, "priceWeight": 7},     
        {"name": "cosmatics", "tax": 0.07, "priceWeight": 8},        
        {"name": "electronics", "tax": 0.07, "priceWeight": 8},
        {"name": "food", "tax": 0, "priceWeight": 7},
        {"name": "shoes", "tax": 0, "priceWeight": 7},     
      ];

      return productTypes;

})
.factory('productService', ['$rootScope', function($rootScope){

	var services ={
		

	};
	var product={
			name: '',
			type: {},
			rmbTotal: 0.0,
            price: 0.0,
            cost:0.0,
            total:0.0,
            rmbTotal: 0.0,
            suggestPrice: 0.0
		};

    return {
    	  getProduct:function(){
    	  	return product;
    	  },
    	  setProduct:function(value){
    	  	product = value;
    	  }
    	}
}]);
