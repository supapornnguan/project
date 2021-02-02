<template>
    <div>
        <navbar/>
        <h1 style="margin-left:100px; font-weight:600">MY CART</h1>
        <sui-table style="width:1200px; margin-left:100px; margin-top:80px">
            <sui-table-header>
                <sui-table-row>
         
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                    <sui-table-header-cell>Quantity</sui-table-header-cell>
                    <sui-table-header-cell>Unit Price</sui-table-header-cell>
                    <sui-table-header-cell>Sub Total</sui-table-header-cell>
                    <sui-table-header-cell></sui-table-header-cell>
            
                </sui-table-row>
            </sui-table-header>
            
            <sui-table-body>
                <sui-table-row style="height:100px" v-for="(key,index) in cartItemList" :key="index">
                    <sui-table-cell style="width:190px"><img :src="cartItemList[index].product_image" :width="150" style="margin-left:30px; margin-right:50px"></sui-table-cell>
                    <sui-table-cell style="width:400px">
                        <p class="info" style="font-weight:800">{{cartItemList[index].product_name}}</p>
                        <p>{{cartItemList[index].product_detail | shortDescription}}</p>
                    </sui-table-cell>
                    <sui-table-cell>
                        <button id="buttonAdd" @click="miniQuantity(index, cartItemList[index].keysProduct)">-</button>
                        <input type="text" id="inputQTY" v-model="cartItemList[index].quantity">
                        <button id="buttonAdd" @click="addQuantity(cartItemList[index].keysProduct)">+</button>
                    </sui-table-cell>
                    <sui-table-cell><p style="font-size:15px;">{{cartItemList[index].product_unit_price}}.00 THB</p></sui-table-cell>
                    <sui-table-cell><p style="font-size:15px;">{{subtotal(index)}}.00 THB</p></sui-table-cell>
                    <sui-table-cell><img src="../assets/delete.png" 
                                        :width="30" 
                                        @click="removeItem(
                                       key.keysProduct
                                        )"></sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        <h5 style="margin-left:1100px; font-weight:700">Total: {{cartValue}}.00 THB</h5>
        <button class="checkout" @click="checkout()">CHECKOUT</button>
    </div>
</template>

<script>
import navbar from "../components/navbar"
// import firebase from "../firebase"
// import {auth} from "../firebase"
// import emptyCart from "../components/emptyCart"
import { mapGetters , mapActions} from "vuex";
export default {
    data() {
        return {
            quantity : [],
            product_quantity : [],
            product : "",
            keyCart : [],
            keysProduct : [],
            Keyunique : [],
            infoProduct : {},
            info:[],
            product_image  : [],
            product_name : [],
            product_detail : [],
            product_unit_price : []
        }
    },
    components : {
        navbar,
        // emptyCart
    },

    //getting product list from cart store
    computed : {
        ...mapGetters([
            'cartItemList',
            'cartValue'
        ])
    },
    methods: {
        checkout(){
            

        },
        subtotal(index) {
				return this.cartItemList[index].quantity * this.cartItemList[index].product_unit_price;
			},
        addQuantity(key){
            const orderAdd = {
                keysProduct : key
            };
            this.addQuantityStore(orderAdd);
        },
        miniQuantity(index, key){
            if(this.cartItemList[index].quantity == "1")
            {
                return "1"
            }
            else{
            const orderMini = {
                keysProduct : key
            }
            this.miniQuantityStore(orderMini);
            }
        },
        ...mapActions(['updateCart','removeItemInCart','addQuantityStore','miniQuantityStore']),
        //remove product in cart
		removeItem(key) {
            this.removeItemInCart({
					keysProduct: key
				});
            console.log(key)
        },
    },
    filters : {
    shortDescription(value1) {
      if(value1 && value1.length > 100){
        return value1.substring(0, 100) + '...';
      }
      else{
        return value1;
      }
    }
  },
    //  created() {
    //     firebase.ref('cart').orderByChild('useruid').equalTo(auth.currentUser.uid).on('value', (snapshot) => {
    //         console.log(snapshot.val())
    //         this.product = snapshot.val()
    //         console.log("created!!!!!!")
    //         this.keyCart = Object.keys(snapshot.val())
    //         console.log(this.keyCart)

    //         for(var i=0 ;i<this.keyCart.length ; i++){
    //             var k = this.keyCart[i];
    //             var keysProduct = snapshot.val()[k].keysProduct
    //             this.keysProduct[i] = keysProduct
    //             console.log("this is key product"+this.keysProduct[i])

    //         }
            
    //         let uniqueArray = this.keysProduct.filter((item, index, array) => {
    //             return array.indexOf(item) === index
    //         })
    //         this.Keyunique = uniqueArray
    //         console.log("unique key product"+this.Keyunique)
    //     })
    // },

    // mounted() {
    //     console.log("mounted!!!!")
    //      for(var j = 0; j<this.Keyunique.length ; j++){
    //         console.log("hahahahha55555")
    //         console.log(this.Keyunique[j])
    //         firebase.ref('product/'+ this.Keyunique[j]).on('value', (snapshot) => {
    //             console.log(snapshot.val())
                
    //             var product_image = snapshot.val().product_image
    //             this.product_image[j] = product_image
    //             console.log(this.product_image)
                
    //             // this.info[j] = this.infoProduct
    //         })
    //     }
    // },
    
}
</script>

<style scoped>
#addQTY{
    display: flex;
}
#inputQTY{
    border-radius: 4px;
    border: 1px solid black;
    width: 30px;
    height: 25px;
    margin-top: -5px;
    text-align: center;
}
#buttonAdd{
    border: none;
    background-color: white;
    margin-top: -5px;
    margin-right:5px ;
    margin-left: 5px;
    height: 25px;
}
.checkout{
    background-color: white;
    border: black solid 1px;
    border-radius: 10px;
    padding: 8px;
    margin-left:660px;

}
    
</style>