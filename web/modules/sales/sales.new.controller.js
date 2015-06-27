(function(){
	'use strict';

	angular.module('app.sales')
		.controller('SalesNewCtrl', salesNewCtrl);

	salesNewCtrl.$inject = ['sales', 'products'];

	function salesNewCtrl(sales, products) {
		var vm = this;
		vm.products = products.get();
	}

})();