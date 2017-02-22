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
            return $http.get("https://calm-bastion-23564.herokuapp.com/products/api/products/")
        }

        function getProductDetail(id) {
            return $http.get("https://calm-bastion-23564.herokuapp.com/products/api/products/"+id+"/")
        }

        function postOrder(order){
            var csrf = $cookies.get('csrftoken');
            console.log(csrf)
            $http({
                method:'POST',
                url:'https://calm-bastion-23564.herokuapp.com/orders/api/orders/',
                data: order,
                //headers:{ 'Content-Type':  "multipart/form-data"},
            })

        }


    }


})();
