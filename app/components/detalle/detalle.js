(function(){

	var detalle = {
		templateUrl:'/app/components/detalle/detalle.html',
		controller: detailController
	}

	function detailController($scope,DataServices,$routeParams,cartService){

		$scope.pID = $routeParams.product_id;
		$scope.added = added;
		$scope.cart = cartService;


		$scope.muestra = function (p) {
			p.img=$scope.product.producto[0].img
			p.id=$scope.product.id
			p.name=$scope.product.name
			p.price=$scope.product.price
			$scope.cart.addProduct(p,0)
		}


		DataServices.getProductDetail($scope.pID)
			.then(function (response) {
				$scope.product = response.data;
				//console.log($scope.product)
			})

			function added() {
				$('#toast').addClass('visible');

				setTimeout(function () {
					$('#toast').removeClass('visible');
				},3000)
			}

	}

	angular
		.module('geekshop')
		.component("detalleComponent", detalle);
})();
