(function(){
	'use strict';

	angular.module('app.core')
		.constant('settings', {
			loginEnabled: true,
			firebase: 'https://vendasonline.firebaseio.com/',
			auth0: {
				domain: 'americoneto1.auth0.com',
	    		clientID: '4UcZDKFz4HDkhhyxnQUWlBiooyIIrsJJ'
			}
		});

})();