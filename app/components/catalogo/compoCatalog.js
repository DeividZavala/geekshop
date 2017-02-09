(function (){

  var catalogo = {
    templateUrl: "app/components/catalogo/catalogo.html",
    controller: catalogCtrl
  }

  function catalogCtrl($scope,DataServices) {

        DataServices.getProducts()
          .then(function (response) {
            $scope.info = response.data
          })

          $scope.openNav = openNav
          $scope.closeNav = closeNav
          $scope.next = next


            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
             }

             function closeNav() {
                 document.getElementById("mySidenav").style.width = "0";
                 document.getElementById("main").style.marginLeft= "0";
            }

            function next(){
              document.getElementById("imgsCarrito").style.padding = "500px";
            }


  }

  angular
     .module("geekshop")
     .component("catalogComponent",catalogo);
})();
