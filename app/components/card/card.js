(function () {

    var card = {

        templateUrl:"/app/components/card/card.html",
        controller: cardCtrl

    }

    function cardCtrl($scope) {

        $(".card_container").hover(function () {
            $(".btn_card").addClass("animated tada")
            $(".name").addClass("animated fadeIn")
            $(".price").addClass("animated fadeIn")
            $(".cuadrito").addClass("animated fadeIn")
        },function () {
            $(".btn_card").removeClass(" animated tada")
            $(".name").removeClass(" animated fadeIn")
            $(".price").removeClass(" animated fadeIn")
            $(".cuadrito").removeClass(" animated fadeIn")
        })
        
    }
    
    angular
        .module('geekshop')
        .component('cardComponent',card);

})();