(function () {

    var navbar = {

        templateUrl:"/app/components/navbar/navbar.html",
        controller:navbarCtrl

    }

    function navbarCtrl($scope,$location,cartService) {

        $scope.selectedTab = 1;
        $scope.checkRoute = checkRoute;
        $scope.cart = cartService;
        $scope.cantidad = cantidad;

        function cantidad() {
            var quantity = 0;
            for (var key in $scope.cart.details){
                quantity += 1;
            }
            return quantity;
        }

        function checkRoute(route) {
            return $location.path() == route;
        }

  			var $L = 1200,
  				$menu_navigation = $('#main-nav'),
  				$cart_trigger = $('#cd-cart-trigger'),

  				$lateral_cart = $('#cd-cart'),
  				$shadow_layer = $('#cd-shadow-layer');
  				$btn_checkout = $('#btn_checkout');


  			//open cart
  			$cart_trigger.on('click', function(event){
  				console.log("Mierda estas dando click!");
  				event.preventDefault();
  				//close lateral menu (if it's open)
  				$menu_navigation.removeClass('speed-in');
  				toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
  			});

  			//close lateral cart or lateral menu
  			$shadow_layer.on('click', function(){
  				$lateral_cart.removeClass('speed-in');
  				$menu_navigation.removeClass('speed-in');
  				$shadow_layer.removeClass('is-visible');
  				$('body').removeClass('overflow-hidden');
  			});

  			$btn_checkout.on('click', function(){
  				console.log("puchado")
  				$lateral_cart.removeClass('speed-in');
  				//$menu_navigation.removeClass('speed-in');
  				$shadow_layer.removeClass('is-visible');
  				$('body').removeClass('overflow-hidden');
  			});

  			//move #main-navigation inside header on laptop
  			//insert #main-navigation after header on mobile
  			move_navigation( $menu_navigation, $L);
  			$(window).on('resize', function(){
  				move_navigation( $menu_navigation, $L);

  				if( $(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
  					$menu_navigation.removeClass('speed-in');
  					$shadow_layer.removeClass('is-visible');
  					$('body').removeClass('overflow-hidden');
  				}

  			});


  		function toggle_panel_visibility ($lateral_panel, $background_layer, $body) {
  			if( $lateral_panel.hasClass('speed-in') ) {
  				$lateral_panel.removeClass('speed-in');
  				$background_layer.removeClass('is-visible');
  				$body.removeClass('overflow-hidden');
  			} else {
  				$lateral_panel.addClass('speed-in');
  				$background_layer.addClass('is-visible');
  				$body.addClass('overflow-hidden');
  			}
  		}

  		function move_navigation( $navigation, $MQ) {
  			if ( $(window).width() >= $MQ ) {
  				$navigation.detach();
  				$navigation.appendTo('header');
  			} else {
  				$navigation.detach();
  				$navigation.insertAfter('header');
  			}
  		}



        $(".nav-toggle").on('click',function () {
            $(".nav-toggle").toggleClass("is-active")
            $(".nav-right").css("position","absolute")
            $(".nav-menu").toggleClass("is-active")
        })

        $("#search").on("click",function () {
            $("#search_box").slideToggle("fast");
        })

        $("#login").on('click',function () {
            $("header + div.modal").fadeIn()
        })
        $("#close_login").on("click",function () {
            $("header + div.modal").fadeOut()
        })

        $(".nav-menu").on('click',function(){
          $(".nav-toggle").toggleClass("is-active")
          // $(".nav-right").css("position","absolute")
          $(".nav-menu").toggleClass("is-active")
        })




        $(window).resize(function() {
  				 if ($(window).width() < 700) {
  							$(".modal-close").css({"z-index": "8", "display": "block",  "position": "relative", "top": "1px", "right" : "-48%"})

  				 }
  						if ($(window).width() > 700){
  							 $(".modal-close").css({"z-index": "8", "display": "inline-block",  "position": "absolute", "top": "20px", "right" : "20px"})
                 $(".nav-right").css("position","relative")
  						}
  			 });

         if ($(window).width() < 600) {
           $(".modal-close").css({"z-index": "8", "display": "block",  "position": "relative", "top": "1px", "right" : "-48%"})

     		  }
     		   else {
             $(".modal-close").css({"z-index": "8", "display": "inline-block",  "position": "absolute", "top": "20px", "right" : "20px"})
     		}


    }

    angular
        .module('geekshop')
        .component('navbarComponent',navbar)

})();
