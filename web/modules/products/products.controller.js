(function(){
	'use strict';

	angular.module('app.products')
		.controller('ProductsCtrl', productsCtrl);

	productsCtrl.$inject = ['products', '$state'];

	function productsCtrl(products, $state) {
		var vm = this;
		vm.products = products.get();
		vm.registerProduct = registerProduct;

		///

		function registerProduct() {
			products.save({
				name: vm.name,
				price: vm.price
			});
			$state.go('products.list');
		}
	}

})();