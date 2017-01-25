(function () {
    angular
        .module('geekshop')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/',{
                template:""
            })
            .when('/catalogo',{
                template:""
            })
            .when('/details/:product_id',{
                template:""
            })
            .when('/checkout',{
                template:""
            })
            .when('/profile/:user_id',{
                template:""
            })
            .otherwise({
                redirectTo:"/"
            })
    }

})();