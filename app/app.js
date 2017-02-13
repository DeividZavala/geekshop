(function () {

    angular
        .module('geekshop',['ngRoute','ngCookies'])
        .config(token)
        .controller("tabsMenu",tabsMenu);

        function token($httpProvider) {
            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        }

        function tabsMenu($scope,$location) {

            $scope.selectedTab = 1;
            $scope.checkRoute = checkRoute;
            
            function checkRoute(route) {
                return $location.path() == route;
            }

        }

})();
