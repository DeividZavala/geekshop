(function () {

    var checkout = {

        templateUrl:"/app/components/checkout/checkout.html",
        controller: checkoutCtrl

    }

    function checkoutCtrl($scope) {
        
    }
    
    angular
        .module('geekshop')
        .component('checkOut',checkout);

})();