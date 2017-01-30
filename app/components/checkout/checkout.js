(function () {

    var checkout = {

        templateUrl:"/app/components/checkout/checkout.html",
        controller: checkoutCtrl

    }

    function checkoutCtrl($scope) {

        $scope.initial_val = 0;
        $scope.hiddenNumber = "";
        $scope.selectSection = selectSection;
        $scope.checkSection = checkSection;

        function selectSection(tab) {
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
            /*
            if (number.length == 15) {
                $scope.hiddenNumber = hidden + number[11] + number[12] + number[13] + number[14]
                console.log("15",$scope.hiddenNumber)
            }else{
                $scope.hiddenNumber = hidden + number[12] + number[13] + number[14] + number[15]
                console.log("16",$scope.hiddenNumber)
            }
            changeNumber("424242424242424")
            */
            
        }
        
    }
    
    angular
        .module('geekshop')
        .component('checkOut',checkout);

})();