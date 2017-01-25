(function () {

    var navbar = {

        templateUrl:"/app/components/navbar/navbar.html",
        controller:navbarCtrl

    }

    function navbarCtrl($scope) {
        
    }

    angular
        .module('geekshop')
        .component('navbarComponent',navbar)

})();