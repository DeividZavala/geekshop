(function () {
    angular
        .module('geekshop')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/',{
                template:`<landing-component></landing-component>`
            })
            .when('/catalogo',{
                template:`<catalog-component></catalog-component>`
            })
            .when('/details/:product_id',{
                template:`<detalle-component></detalle-component>`
            })
            .when('/checkout',{
                template:`<check-out></check-out>`
            })
            .when('/profile/:user_id',{
                template:`<user-component></user-component>`
            })
            .when('/cart',{
                template:`<cart-component></cart-component>`
            })
            .when('/testcard',{
                template:`<card-component></card-component>`
            })
            .otherwise({
                redirectTo:"/"
            })
    }

})();