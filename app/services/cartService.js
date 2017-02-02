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
            }

            function addProduct(product) {
                if ( typeof this.details[product.id] == "undefined") {
                    this.details[product.id] = {
                        quantity : 1,
                        product  : product
                    }
                } else {
                    this.details[product.id].quantity += 1
                }
                this.count += 1;
                this.total += product.price;
                this.save();
            }

            function deleteProduct(product_id) {
                this.count -= this.details[product_id].quantity;
                this.total -= (this.details[product_id].quantity * this.details[product_id].product.price);
                delete this.details[product_id];
                this.save();
            }

        }

})();