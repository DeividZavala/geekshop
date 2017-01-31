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

	}



	angular
		.module('geekshop')
		.component('userComponent', user_profile);
})();