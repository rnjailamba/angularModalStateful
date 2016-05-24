(function(){
  	'use strict';

	angular.module("modalApp", ["ui.router"]).config(function($stateProvider) {

	  $stateProvider.state("Modal", {
        url  : '/card',
	    views:{
	      "modal": {
	        templateUrl: "src/users/view/confirm.html"
	      }
	    }
	  });
	});

})();
