(function(){
	'use strict';

	angular.module('app.users')
		.factory('users', users);

	users.$inject = ['auth', 'aiStorage', '$rootScope', '$state'];

	function users(auth, aiStorage, $rootScope, $state) {
		var service = {
			login: login,
			logout: logout
		};
		return service;

		function login() {
    		auth.signin({
    			dict: 'pt-BR',
                disableSignupAction: true,
                closable: true
    		}, function(profile, token) {
      			aiStorage.set('profile', profile);
		      	aiStorage.set('token', token);
		      	$rootScope.profile = profile;
		      	$state.go('home');
		    }, function(error) {
		    	//logger
		    	console.log("There was an error logging in", error);
		      	$state.go('error'); //TO DO
		    });
  		}

		function logout() {
			auth.signout();
    		aiStorage.remove('profile');
    		aiStorage.remove('token');
    		$rootScope.profile = null;
			$state.go('home');
		}
	}

})();