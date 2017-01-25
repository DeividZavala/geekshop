(function (){

  var firstCompo = {
    templateUrl: "catalogo.html",
    controller: catCompo
  }


  angular
     .module("geekshop")
     .component("catalogComponent",catCompo);
})();
