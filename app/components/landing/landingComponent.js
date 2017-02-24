(function (){

	var landingCompo = {
			templateUrl: "app/components/landing/Landing.html",
      controller: landingCtrl
	}

  function landingCtrl($scope, DataServices){

			var slideIndex = 0;
			showSlides();

			function showSlides() {
					var i;
					var slides = document.getElementsByClassName("mySlides");
					var dots = document.getElementsByClassName("dot");
					for (i = 0; i < slides.length; i++) {
						slides[i].style.display = "none";
					}
					slideIndex++;
					if (slideIndex> slides.length) {slideIndex = 1}
					for (i = 0; i < dots.length; i++) {
							dots[i].className = dots[i].className.replace(" active", "");
					}
					//slides[slideIndex-1].style.display = "block";
					//dots[slideIndex-1].className += " active";
					//setTimeout(showSlides, 3000); // Change image every 2 seconds
			}

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
  	}
		if ($(window).width() > 600) {
				$("section article div div.botonesCarritoMobile").addClass("botonesCarrito")
				$("section article div div.botonesCarritoMobile").removeClass("botonesCarritoMobile")
		}

		});

		DataServices.getProducts()
			.then(function (response) {
				$scope.info = response.data
			})


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

								$('.carousel_ul').css({'left' : '-255px'});
								});
						});
			});

  }

	angular
		.module("geekshop")
		.component("landingComponent",landingCompo);

})();
