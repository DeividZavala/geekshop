(function () {

    angular
        .module('geekshop')
        .factory('DataServices',DataServices);

    function DataServices($http,$cookies) {
        
        return {

            "getProducts"       : getProducts,
            "getProductDetail"  : getProductDetail,
            "postOrder"         : postOrder

        }

        function getProducts() {
            return $http.get("http://localhost:8000/api/products/")
        }

        function getProductDetail(id) {
            return $http.get("http://localhost:8000/api/products/"+id+"/")
        }

        function postOrder(order){
            var csrf = $cookies.get('csrftoken');
            console.log(csrf)
            $http({
                method:'POST',
                url:'http://localhost:8000/api/orders/',
                data: order,
                //headers:{ 'Content-Type':  "multipart/form-data"},
            })

        }


    }

    
})();