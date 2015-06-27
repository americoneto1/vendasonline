(function(){
	'use strict';

	angular.module('app.sales')
		.config(configure);

	configure.$inject = ['$stateProvider', 'settings'];

	function configure($stateProvider, settings) {
		$stateProvider
     		.state('sales', {
        		url: '/sales',
        		templateUrl: 'modules/sales/sales.html',
        		controller: 'SalesCtrl',
				controllerAs: 'vm',
        		data: {
	        		requiresLogin: settings.loginEnabled
	        	}
			})
			.state('sales.list', {
				url: '/list',
				templateUrl: 'modules/sales/sales.list.html'
			})
			.state('sales.new', {
				url: '/new',
				templateUrl: 'modules/sales/sales.new.html'
			});
	}

})();