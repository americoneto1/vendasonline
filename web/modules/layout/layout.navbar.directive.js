(function(){
	'use strict';

	angular.module('app.layout')
		.directive('voNavBar', voNavBar);

	function voNavBar() {
	    var directive = {
	        restrict: 'E',
	        templateUrl: 'modules/layout/layout.navbar.html',
	        controller: NavBarController,
	        controllerAs: 'vm'
	    };

	    return directive;
	}

	NavBarController.$inject = ['users', '$rootScope'];

	function NavBarController(users, $rootScope) {
	    var vm = this;
	    vm.menu = [
	    	{
	    		state: 'home',
	    		text: 'Home'
	    	},
	    	{
	    		state: 'reports',
	    		text: 'Relatórios'
	    	},
	    	{
	    		state: 'sales.new',
	    		text: 'Registro de Venda'
	    	},
	    	{
	    		state: 'products.list',
	    		text: 'Produtos'
	    	}
	    ];

	    $rootScope.$watch('profile', function(val) {
	    	vm.profile = val;
	    });
	}

})();