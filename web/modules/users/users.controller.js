(function(){
	'use strict';

	angular.module('app.users')
		.controller('UsersCtrl', usersCtrl);

	usersCtrl.$inject = ['users', '$location'];

	function usersCtrl(users, $location) {
		var vm = this;
		vm.login = users.login();
		vm.logout = users.logout();
	}

})();