(function () {

    var checkout = {

        templateUrl:"/app/components/checkout/checkout.html",
        controller: checkoutCtrl

    }

    function checkoutCtrl($scope,cartService) {

        $scope.initial_val = 0;
        $scope.cart = cartService;
        $scope.hiddenNumber = "";
        $scope.selectSection = selectSection;
        $scope.checkSection = checkSection;

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
        
    }
    
    angular
        .module('geekshop')
        .component('checkOut',checkout);

})();