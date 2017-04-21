(function(){

	var user_profile = {
		templateUrl :'/app/components/user_profile/user_profile.html',
		controller :userController
	}

	function userController($scope){


		$scope.tab=1;

			$scope.selectTab = function(setTab){
				$scope.tab = setTab;
			};

			$scope.isSelected = function(checkTab){
				return $scope.tab === checkTab;
			};

			$(window).resize(function() {
				 if ($(window).width() < 550) {
							$("#contenPerfil").css({"left":"22%", "bottom":"-32%"})

				 }
						if ($(window).width() > 550) {
							$("#contenPerfil").css({"left":"20%", "bottom":"-10%"})

						}
			 });

	}



	angular
		.module('geekshop')
		.component('userComponent', user_profile);
})();
