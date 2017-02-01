(function (){

  var catalogo = {
    templateUrl: "/app/components/catalogo/catalogo.html",
    controller: catalogCtrl
  }

  function catalogCtrl($scope,DataServices) {

        DataServices.getProducts()
          .then(function (response) {
            $scope.info = response.data
            console.log($scope.info)
          })

          /*$scope.openNav = openNav
          $scope.closeNav = closeNav

            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
             }

             function closeNav() {
                 document.getElementById("mySidenav").style.width = "0";
                 document.getElementById("main").style.marginLeft= "0";
            }

              var slideIndex = 1;
                    showSlides(slideIndex);

                    function plusSlides(n) {
                      showSlides(slideIndex += n);
                    }

                    function currentSlide(n) {
                      showSlides(slideIndex = n);
                    }

                    function showSlides(n) {
                        var i;
                        var slides = document.getElementsByClassName("mySlides");
                        var dots = document.getElementsByClassName("dot");
                        if (n > slides.length) {slideIndex = 1}
                        if (n < 1) {slideIndex = slides.length}
                          for (i = 0; i < slides.length; i++) {
                              slides[i].style.display = "none";
                          }

                          for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                          }
                               slides[slideIndex-1].style.display = "block";
                               dots[slideIndex-1].className += " active";
                    }*/
  }


  angular
     .module("geekshop")
     .component("catalogComponent",catalogo);
})();
