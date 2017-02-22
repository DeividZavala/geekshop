(function () {

    var checkout = {

        templateUrl:"/app/components/checkout/checkout.html",
        controller: checkoutCtrl

    }

    function checkoutCtrl($scope,cartService,DataServices,$cookies) {

        $scope.initial_val = 0;
        $scope.cart = cartService;
        $scope.hiddenNumber = "";
        $scope.selectSection = selectSection;
        $scope.checkSection = checkSection;
        $scope.postOrder = postOrder;

        function selectSection(tab,cartService) {
            $scope.initial_val = tab;
        }

        function checkSection(tab) {
            return $scope.initial_val == tab;
        }

        function changeNumber(number) {
            var hidden = "";
            for (var i = 0; i <= number.length-5; i++) {
                 hidden = hidden += "*"
            }
            $scope.hiddenNumber = hidden + number[12] + number[13] + number[14] + number[15]
            
        }

        function postOrder(user_info){

            var products = new Object();

            for (var i in $scope.cart.details){
                products[$scope.cart.details[i].product.id.toString(10)] = $scope.cart.details[i].quantity;
            }
            
            var order_info = user_info;
            order_info.item = products; 
            order_info.total = $scope.cart.total
            console.log(typeof order_info.tel)
            console.log(order_info)

            DataServices.postOrder(order_info)
        }
        
    }
    
    angular
        .module('geekshop')
        .component('checkOut',checkout);

})();