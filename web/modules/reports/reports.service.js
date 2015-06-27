(function(){
	'use strict';

	angular.module('app.reports')
		.factory('reports', reports);

	reports.$inject = ['$firebaseArray', '$firebaseObject', 'settings'];

	function reports($firebaseArray, $firebaseObject, settings) {
		var baseRef = settings.firebase + "reports";

		var service = {
			getProductReport: getProductReport,
			getVendorReport: getVendorReport,
			registerProduct: registerProduct,
			registerVendor: registerVendor
		};
		return service;

		function loadData(ref, callback) {
            var reports = $firebaseArray(ref);

            if(callback)
            	reports.$loaded().then(callback);	

            ref.on('value', function() {
            	reports.$loaded().then(callback);	
            });
		}

		function getProductReport(callback) {
			var ref = new Firebase(baseRef + "/product");
			loadData(ref, callback);
		}

		function getVendorReport(callback) {
			var ref = new Firebase(baseRef + "/vendor");
			loadData(ref, callback);
		}

		function registerProduct(entity) {
			var ref = new Firebase(baseRef + "/product");
			var product = ref.child(entity.product);
			var obj = $firebaseObject(product);

			obj.$loaded().then(function (loadedData) {
				product.set(loadedData.$value + entity.quantity);
			});
		}

		function registerVendor(entity) {
			var ref = new Firebase(baseRef + "/vendor");
			var vendor = ref.child(entity.vendor);
			var obj = $firebaseObject(vendor);

			obj.$loaded().then(function (loadedData) {
				vendor.set(loadedData.$value + entity.quantity);
			});
		}
	}

})();