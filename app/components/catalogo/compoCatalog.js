(function (){

  var catalogo = {
    templateUrl: "app/components/catalogo/catalogo.html",
    controller: catalogCtrl
  }

  function catalogCtrl($scope,DataServices, swipeService) {

         DataServices.getProducts()
           .then(function (response) {
             $scope.info = response.data
        })

            $scope.openNav = openNav
            $scope.closeNav = closeNav


            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
             }

            function closeNav() {
                 document.getElementById("mySidenav").style.width = "0";
                 document.getElementById("main").style.marginLeft= "0";
            }

            $scope.RightS = swipeService.swipeRight
      			$scope.LeftS = swipeService.swipeLeft


      			$(document).ready(function() {
      						$('.carousel_ul li:first').before($('.carousel_ul li:last'));

      						$('#right_scroll i').click(function(){

      								$scope.RightS();

      						});

      						$('#left_scroll i').click(function(){

      								$scope.LeftS();

      						});
      			});

            $(window).resize(function() {
  	           if ($(window).width() < 550) {
			              $("section article div div.botonesCarrito").addClass("botonesCarritoMobile")
				            $("section article div div.botonesCarrito").removeClass("botonesCarrito")
                    closeNav();
  	           }
		              if ($(window).width() > 550) {
				                 $("section article div div.botonesCarritoMobile").addClass("botonesCarrito")
				                 $("section article div div.botonesCarritoMobile").removeClass("botonesCarritoMobile")

		              }
		         });
  }

  angular
     .module("geekshop")
     .component("catalogComponent",catalogo);
})();
