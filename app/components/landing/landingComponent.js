(function (){

	var landingCompo = {
			templateUrl: "app/components/landing/Landing.html",
      controller: landingCtrl
	}

  function landingCtrl($scope, DataServices, swipeService){

			$("#cua1").hover(function(){
          $("#cua1 .iconSuperior").toggleClass("animated tada")

      })

			$("#cua2").hover(function(){
          $("#cua2 .iconSuperior").toggleClass("animated tada")

      })

			$("#cua3").hover(function(){
          $("#cua3 .iconSuperior").toggleClass("animated tada")

      })

		$(window).resize(function() {

		if ($(window).width() < 600) {
			  $("section article div div.botonesCarrito").addClass("botonesCarritoMobile")
				$("section article div div.botonesCarrito").removeClass("botonesCarrito")

				$(".parallax span").addClass("spanChi")
				$(".parallax .spanChi").removeClass("PaM")

				$(".parallax .PaBu").addClass("buChi")
				$(".parallax .buChi").removeClass("PaBu")

  	}

		if ($(window).width() > 600) {
				$("section article div div.botonesCarritoMobile").addClass("botonesCarrito")
				$("section article div div.botonesCarritoMobile").removeClass("botonesCarritoMobile")

				$(".parallax .spanChi").addClass("PaM")
				$(".parallax span").removeClass("spanChi")

				$(".parallax .buChi").addClass("PaBu")
				$(".parallax .PaBu").removeClass("buChi")

		}

		});

		if ($(window).width() < 600) {
			$("section article div div.botonesCarrito").addClass("botonesCarritoMobile")
			$("section article div div.botonesCarrito").removeClass("botonesCarrito")

			$(".parallax span").addClass("spanChi")
			$(".parallax .spanChi").removeClass("PaM")

			$(".parallax .PaBu").addClass("buChi")
			$(".parallax .buChi").removeClass("PaBu")

		}
		else {
			$("section article div div.botonesCarritoMobile").addClass("botonesCarrito")
			$("section article div div.botonesCarritoMobile").removeClass("botonesCarritoMobile")

			$(".parallax .spanChi").addClass("PaM")
			$(".parallax span").removeClass("spanChi")

			$(".parallax .buChi").addClass("PaBu")
			$(".parallax .PaBu").removeClass("buChi")
		}

		DataServices.getProducts()
			.then(function (response) {
				$scope.info = response.data
			})

			$scope.RightS = swipeService.swipeRight
			$scope.LeftS = swipeService.swipeLeft


			$(document).ready(function() {
						$('.carousel_ul li:first').before($('.carousel_ul li:last'));

			});

			$('#right_scroll i').click(function(){

					$scope.RightS();

			});

			$('#left_scroll i').click(function(){

					$scope.LeftS();

			});

  }

	angular
		.module("geekshop")
		.component("landingComponent",landingCompo);

})();
