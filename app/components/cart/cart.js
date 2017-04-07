(function(){

	var carrito = {
		templateUrl:'/app/components/cart/cart.html',
		controller:cartController
	}

	function cartController(cartService,$scope){

		$scope.cart = cartService;


			//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
			var $L = 1200,
				$menu_navigation = $('#main-nav'),
				$cart_trigger = $('#cd-cart-trigger'),

				$lateral_cart = $('#cd-cart'),
				$shadow_layer = $('#cd-shadow-layer');
				$btn_checkout = $('#btn_checkout');



			//open cart
			$cart_trigger.on('click', function(event){
				event.preventDefault();
				console.log("Mierda estas dando click!");
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

	}

	angular
		.module('geekshop')
		.component('cartComponent', carrito);
})();
