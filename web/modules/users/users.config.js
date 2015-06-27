(function(){
	'use strict';

	angular.module('app.users')
		.config(configure);

	configure.$inject = ['$stateProvider', 'authProvider', '$httpProvider', 'jwtInterceptorProvider', 'settings'];

	function configure($stateProvider, authProvider, $httpProvider, jwtInterceptorProvider, settings) {
		$stateProvider
     		.state('login', {
        		url: '/login',
        		controller: 'UsersCtrl',
        		controllerAs: 'vm',
        		template: '<div ng-init="vm.login()"></div>'
			})
			.state('logout', {
				url: '/logout',
        		controller: 'UsersCtrl',
        		controllerAs: 'vm',
        		template: '<div ng-init="vm.logout()"></div>'
			});

		authProvider.init({
		    domain: settings.auth0.domain,
		    clientID: settings.auth0.clientID,
		    loginState: 'login'
		});

		jwtInterceptorProvider.tokenGetter = function(aiStorage) {
			return aiStorage.get('token');
		}

		$httpProvider.interceptors.push('jwtInterceptor');
	}

})();