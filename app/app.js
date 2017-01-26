(function () {

    angular
        .module('geekshop',['ngRoute'])
        .controller("tabsMenu",tabsMenu);

        function tabsMenu($scope,$location) {
            console.log("entre al controller")

            $scope.selectedTab = 1;
            $scope.checkRoute = checkRoute;
            
            function checkRoute(route) {
                return $location.path() == route;
            }

        }

})();