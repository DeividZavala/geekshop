(function(){

	angular
		.module('geekshop')
		.service('DataServices', DataServices);

	function DataServices($http){
		return{
			"getProducts":getProducts
		}
		function getProducts() {
			return $http.get("http://localhost:8000/api/products/")
		}
	}
})();