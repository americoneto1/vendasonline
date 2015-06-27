(function(){
	'use strict';

	angular.module('app.products')
		.config(configure);

	configure.$inject = ['$stateProvider', 'settings'];

	function configure($stateProvider, settings) {
		$stateProvider
     		.state('products', {
        		url: '/products',
        		templateUrl: 'modules/products/products.html',
        		controller: 'ProductsCtrl',
				controllerAs: 'vm',
        		data: {
	        		requiresLogin: settings.loginEnabled
	        	}
			})
			.state('products.list', {
				url: '/list',
				templateUrl: 'modules/products/products.list.html'
			})
			.state('products.new', {
				url: '/new',
				templateUrl: 'modules/products/products.new.html'
			});
	}

})();