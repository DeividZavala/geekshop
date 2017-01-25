(function (){

	var landingCompo = {
			templateUrl: "./landing.html",
      controller: landingCtrl
	}

  function landingCtrl($scope){


  }

	angular
		.module("app")
		.component("landingComponent",firstCompo);

})();
