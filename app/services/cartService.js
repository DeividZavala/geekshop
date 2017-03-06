(function () {

    angular
        .module('geekshop')
        .service('cartService',cartService);

        function cartService() {

            return{

                'count'         : parseInt(localStorage.getItem("count")) || 0,
                'total'         : parseInt(localStorage.getItem("total")) || 0,
                'details'       : JSON.parse(localStorage.getItem("details")) || {},
                'addProduct'    : addProduct,
                'clear'         : clear,
                'getDetail'     : getDetail,
                'deleteProduct' : deleteProduct,
                'removeProduct' : removeProduct,
                'save'          : save

            };

            function save(){
                localStorage.setItem("count", this.count);
                localStorage.setItem("total", this.total);
                localStorage.setItem("details", JSON.stringify(this.details));
            }

            function clear() {
                this.count = 0;
                this.total = 0;
                this.details = {};
                this.save()
            }

            function getDetail(product_id) {
                if( typeof this.details[product_id] != "undefined"){
                    return this.details[product_id].quantity;
                }
                return 0;
                console.log(this.details[product_id]);
            }

            function addProduct(product, lu) {
                if ( typeof this.details[product.id] == "undefined") {
                    this.details[product.id] = {
                        quantity : product.quantity,
                        product  : product
                    }
                } else {
                    product.quantity += 1
                    console.log();
                }
                if(lu==0){

                  this.count +=(product.quantity);
                }else {
                  this.count += 1;
                }

                this.total += (product.price * product.quantity);
                this.save();
                console.log(product);
            }

            function removeProduct(item) {
                if(item.quantity < 1){
                    this.deleteProduct(item.id)
                }else{
                    item.quantity = item.quantity - 1
                }


                  this.count -= 1;

                this.total -= item.price;
                this.save();
                console.log(item);
            }


            function deleteProduct(item) {
                this.count -= item.quantity;
                this.total -= (item.price * item.quantity);
                delete this.details[item.id]
                this.save();
            }

        }

})();
