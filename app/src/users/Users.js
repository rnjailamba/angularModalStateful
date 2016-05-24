(function(){
  	'use strict';

	angular.module("modalApp", ["ui.router"]).config(function($stateProvider) {
	  $stateProvider.state("Modal", {
	    views:{
	      "modal": {
	        templateUrl: "src/users/view/modal.html"
	      }
	    },
	    abstract: true
	  });

	  $stateProvider.state("Modal.confirmAddToCart", {
	    views:{
	      "modal": {
	        templateUrl: "src/users/view/confirm.html"
	      }
	    }
	  });
	});

})();
