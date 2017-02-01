(function () {

    var card = {

        templateUrl:"/app/components/card/card.html",
        controller: cardCtrl,
        bindings: {
            product : "="
        }

    }

    function cardCtrl($scope,cartService) {

        $scope.cart = cartService;

        $(".card_container").hover(function () {
            $(".btn_card").toggleClass("animated tada")
            $(".name, .price, .cuadrito").toggleClass("animated fadeIn")
        })
        
    }
    
    angular
        .module('geekshop')
        .component('cardComponent',card);

})();