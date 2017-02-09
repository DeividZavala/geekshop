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
        $scope.added = added;
        $scope.animations = animations;


        function animations() {
            $(".btn_card").toggleClass("animated tada")
            $(".name, .price, .cuadrito").toggleClass("animated fadeIn")
        }

        function added() {
            $('#toast').addClass('visible');

            setTimeout(function () {
                $('#toast').removeClass('visible');
            },3000)
        }

    }

    angular
        .module('geekshop')
        .component('cardComponent',card);

})();
