(function(){
	'use strict';

	angular.module('app.sales')
		.factory('sales', sales);

	sales.$inject = ['$firebaseArray', '$firebaseObject', 'reports', 'settings'];

	function sales($firebaseArray, $firebaseObject, reports, settings) {
		var baseRef = settings.firebase + "sales";

		var service = {
			get: get,
			save: save
		};
		return service;

		function get(vendor) {
			var ref = new Firebase(baseRef + "/" + vendor);
            return $firebaseArray(ref);
		}

		function save(entity) {
			var ref = new Firebase(baseRef + "/" + entity.vendor);
			var sale = ref.child(entity.product);
			var obj = $firebaseObject(sale);	

			obj.$loaded().then(function (loadedData) {
				sale.set({
					quantity: (loadedData.quantity || 0) + entity.quantity
				});
			});

			reports.registerProduct(entity);
			reports.registerVendor(entity);
		}
	}

})();