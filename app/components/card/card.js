(function () {

    var card = {

        templateUrl:"/app/components/card/card.html",
        controller: cardCtrl

    }

    function cardCtrl($scope) {

        $(".card_container").hover(function () {
            $(".btn_card").toggleClass("animated tada")
            $(".name, .price, .cuadrito").toggleClass("animated fadeIn")
        })
        
    }
    
    angular
        .module('geekshop')
        .component('cardComponent',card);

})();