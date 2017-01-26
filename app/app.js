(function () {

    angular
        .module('geekshop',['ngRoute'])
        .controller("tabsMenu",tabsMenu);

        function tabsMenu($scope,$location) {

            $scope.selectedTab = 1;
            $scope.checkRoute = checkRoute;
            
            function checkRoute(route) {
                return $location.path() == route;
            }

        }

})();
