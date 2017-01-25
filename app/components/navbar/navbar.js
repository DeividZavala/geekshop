(function () {

    var navbar = {

        templateUrl:"/app/components/navbar/navbar.html",
        controller:navbarCtrl

    }

    function navbarCtrl($scope) {
        
        $(".nav-toggle").on('click',function () {
            $(".nav-toggle").toggleClass("is-active")
            $(".nav-right").css("position","absolute")
            $(".nav-menu").toggleClass("is-active")
        })

        $("#search").on("click",function () {
            $("#search_box").slideToggle("slow");
        })

    }

    angular
        .module('geekshop')
        .component('navbarComponent',navbar)

})();