(function(){
	'use strict';

	angular.module('app.sales')
		.controller('SalesCtrl', salesCtrl);

	salesCtrl.$inject = ['products', 'sales', '$state', '$rootScope'];

	function salesCtrl(products, sales, $state, $rootScope) {
		var vendorName = $rootScope.profile.nickname;

		var vm = this;
		vm.sales = sales.get(vendorName);
		vm.products = products.get();
		vm.registerSale = registerSale;

		///

		function registerSale() {
			sales.save({
				vendor: vendorName,
				product: vm.product,
				quantity: vm.quantity
			});
			$state.go('sales.list');
		}
	}

})();