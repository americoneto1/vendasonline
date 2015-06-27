(function(){
	'use strict';

	angular.module('app.products')
		.factory('products', products);

	products.$inject = ['$firebaseArray', '$firebaseObject', 'settings'];

	function products($firebaseArray, $firebaseObject, settings) {
		var ref = new Firebase(settings.firebase + "products");

		var service = {
			get: get,
			save: save
		};
		return service;

		function get() {
            return $firebaseArray(ref);
		}

		function save(entity) {
			var product = ref.child(entity.name);
           	product.set({
           		price: parseFloat(entity.price)
           	});
            return $firebaseObject(product);	
		}
	}

})();