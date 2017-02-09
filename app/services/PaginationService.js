(function() {
    'use strict';

    angular
        .module('geekshop', [])
        .factory('PagerService', PagerService)
        .controller('ExampleController', ExampleController);

    function ExampleController(PagerService) {
        var vm = this;

        vm.ejemplo = []
        for (var i = 1; i < 121; i++) {
            vm.ejemplo.push(i)
        }
        vm.dummyItems = vm.ejemplo; // Matriz ficticia de elementos a ser paginados

        vm.pager = {};
        vm.setPage = setPage;

        initController();

        function initController() {
            // Inicializar en la página 1
            vm.setPage(1);
        }

        function setPage(page) {   //page = pagina en la que esta

          if (page < 1 || page > vm.pager.totalPages) { //mayor a 1 o menor al total de paginas
                return;
            }
            // Obtener objeto de paginador de servicio, toda su informacion
            vm.pager = PagerService.GetPager(vm.dummyItems.length, page);

            // Obtener items actuales de la pagina
            vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);

        }
    }

    function PagerService() {
        // Definición de servicio
        var service = {};

        service.GetPager = GetPager;

        return service;

        // service implementacion
        function GetPager(totalItems, currentPage, pageSize) {
            // Predeterminado a primera página de initController
            currentPage = currentPage || 1;

            // Numero de items que apareceran
            pageSize = pageSize || 10;

            // calcular total pages
            var totalPages = Math.ceil(totalItems / pageSize);

            var startPage, endPage;
            if (totalPages <= 10) {
                // en caso de ser menos de 10 paginas
                startPage = 1; //empieza la numeracion en 1
                endPage = totalPages;
            } else {
                // Más de 10 páginas totales para calcular las páginas de inicio y final
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                } else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }

            // calculate start and end item indexes
            var startIndex = (currentPage - 1) * pageSize;
            var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

            // create an array of pages to ng-repeat in the pager control
            var ejemploDos = []
            for (var i = startPage; i < endPage + 1; i++) {
                ejemploDos.push(i)
            }
            var pages = ejemploDos;


            //var pages = _.range(startPage, endPage + 1);

            // return object with all pager properties required by the view
            return {
                totalItems: totalItems,
                currentPage: currentPage,
                pageSize: pageSize,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                startIndex: startIndex,
                endIndex: endIndex,
                pages: pages
            };
        }
    }
})();
