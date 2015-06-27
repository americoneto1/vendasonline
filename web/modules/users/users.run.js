(function(){
	'use strict';

	angular.module('app.users')
		.run(run);

	run.$inject = ['$rootScope', 'auth', 'aiStorage', 'jwtHelper', '$state'];

	function run($rootScope, auth, aiStorage, jwtHelper, $state) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    		if (!auth.isAuthenticated) {
      			var token = aiStorage.get('token');
	      		if (token) {
	        		if (!jwtHelper.isTokenExpired(token)) {
	          			auth.authenticate(aiStorage.get('profile'), token);
		        	} else {
		        		$state.go('login');
		        	}
		        }
	      	}
	    });
	}

})();