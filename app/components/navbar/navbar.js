(function () {

    var navbar = {

        templateUrl:"/app/components/navbar/navbar.html",
        controller:navbarCtrl

    }

    function navbarCtrl($scope,$location,cartService) {

        $scope.selectedTab = 1;
        $scope.checkRoute = checkRoute;
        $scope.cart = cartService;
        $scope.cantidad = cantidad;

        function cantidad() {
            var quantity = 0;
            for (var key in $scope.cart.details){
                quantity += 1;
            }
            return quantity;
        }

        function checkRoute(route) {
            return $location.path() == route;
        }


        $(".nav-toggle").on('click',function () {
            $(".nav-toggle").toggleClass("is-active")
            $(".nav-right").css("position","absolute")
            $(".nav-menu").toggleClass("is-active")
        })

        $("#search").on("click",function () {
            $("#search_box").slideToggle("fast");
        })

        $("#login").on('click',function () {
            $("header + div.modal").fadeIn()
        })
        $("#close_login").on("click",function () {
            $("header + div.modal").fadeOut()
        })

    }

    angular
        .module('geekshop')
        .component('navbarComponent',navbar)

})();
