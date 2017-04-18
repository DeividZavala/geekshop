(function () {

    angular
        .module('geekshop')
        .service("swipeService",swipeService);

        function swipeService() {

            return{

                'swipeRight' : swipeRight,
                'swipeLeft'  : swipeLeft

            };

            function swipeRight(){
              var item_width = $('.carousel_ul li').outerWidth() + 10;
              var left_indent = parseInt($('.carousel_ul').css('left')) - item_width;

                $('.carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){
                    $('.carousel_ul li:last').after($('.carousel_ul li:first'));
                    $('.carousel_ul').css({'left' : '-255px'});

                    if (left_indent > -500) {
                      left_indent = -510
                      $('.carousel_ul').css({'left' : '-0px'});
                    }

                });
            }

            function swipeLeft() {
              var item_width = $('.carousel_ul li').outerWidth() + 10;
              var left_indent = parseInt($('.carousel_ul').css('left')) + item_width;

                $('.carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){
                $('.carousel_ul li:first').before($('.carousel_ul li:last'));
                $('.carousel_ul').css({'left' : '-255px'});

                    if (left_indent > 1) {
                      left_indent = 0
                      $('.carousel_ul').css({'left' : '-0px'});
                    }

                });

            }

          }

})();
