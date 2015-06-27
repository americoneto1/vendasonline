(function(){
	'use strict';

	angular.module('app.core')
		.config(configure);

	configure.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configure($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
        		url: '/',
        		templateUrl: 'modules/core/home.html'
			});

		$urlRouterProvider.otherwise('/');
	}

})();