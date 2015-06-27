(function(){
	'use strict';

	angular.module('app.reports')
		.config(configure);

	configure.$inject = ['$stateProvider', 'settings'];

	function configure($stateProvider, settings) {
		$stateProvider
     		.state('reports', {
        		url: '/reports',
        		controller: 'ReportsCtrl',
        		controllerAs: 'vm',
        		templateUrl: 'modules/reports/reports.html',
        		data: {
	        		requiresLogin: settings.loginEnabled
	        	}
			});
	}

})();