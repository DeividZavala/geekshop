(function () {
    angular
        .module('geekshop')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/',{
                template:""
            })
            .when("/catalogo",{
                template:""
            })
            .otherwise({
                redirectTo:"/"
            })
    }

})()