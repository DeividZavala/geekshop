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


            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
             }

            function closeNav() {
                 document.getElementById("mySidenav").style.width = "0";
                 document.getElementById("main").style.marginLeft= "0";
            }

            $(document).ready(function() {
                    $('.carousel_ul li:first').before($('.carousel_ul li:last'));

                    $('#right_scroll i').click(function(){

                        var item_width = $('.carousel_ul li').outerWidth() + 10;

                        var left_indent = parseInt($('.carousel_ul').css('left')) - item_width;

                        $('.carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){

                            $('.carousel_ul li:last').after($('.carousel_ul li:first'));

                            $('.carousel_ul').css({'left' : '-255px'});
                        });
                    });

                    $('#left_scroll i').click(function(){

                        var item_width = $('.carousel_ul li').outerWidth() + 10;

                        var left_indent = parseInt($('.carousel_ul').css('left')) + item_width;

                        $('.carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){

                        $('.carousel_ul li:first').before($('.carousel_ul li:last'));

                        $('.carousel_ul').css({'left' : '-210px'});
                        });
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
