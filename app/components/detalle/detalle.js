(function(){

	var detalle = {
		templateUrl:'/app/components/detalle/detalle.html',
		controller: detailController
	}

	function detailController($scope,DataServices,$routeParams){

		$scope.pID = $routeParams.product_id;

		DataServices.getProductDetail($scope.pID)
			.then(function (response) {
				$scope.product = response.data;
				console.log($scope.product)
			})

	}

	angular
		.module('geekshop')
		.component("detalleComponent", detalle);
})();