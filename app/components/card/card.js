(function () {

    var card = {

        templateUrl:"/app/components/card/card.html",
        controller: cardCtrl,
        bindings: {
            product : "="
        }

    }

    function cardCtrl($scope,cartService) {

        //var card = this;
        $scope.cart = cartService;
        $scope.added = added;
        $scope.animations = animations;

        //console.log(card.product)
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

        $scope.muestra = function (pro) {
    			p.img  = pro.producto[0].img
    			p.id = pro.id
    			p.name = pro.productname
    			p.price  = pro.price
    			$scope.cart.addProduct(p,1)
          console.log(p);
    		}

    }

    angular
        .module('geekshop')
        .component('cardComponent',card);

})();
