<template>
    <div>
       
        <navbar/>


        <h1 style="margin-left:100px; font-weight:600">MY CART</h1>
        <div v-if="cartItemList == null">
            <p>null</p>

        </div>
      
      <div  v-if="cartItemList.lenght != 0">
    <div v-for="(key,index1) in this.name_shop_list_uni" :key="index1">
       
        
        <h1 style="margin-left:100px; font-weight:600; margin-top:80px" >NAME SHOP : {{name_shop_list_uni[index1]}} </h1>
        <sui-table style="width:1200px; margin-left:100px;" >
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Select</sui-table-header-cell>
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                    <sui-table-header-cell>Quantity</sui-table-header-cell>
                    <sui-table-header-cell>Unit Price</sui-table-header-cell>
                    <sui-table-header-cell>Sub Total</sui-table-header-cell>
                    <sui-table-header-cell></sui-table-header-cell>
            
                </sui-table-row>
            </sui-table-header>
            
   
            <sui-table-body v-for="(key,index) in cartItemList" :key="index">
                <sui-table-row style="height:100px" v-if="cartItemList[index].seller_name_shop == name_shop_list_uni[index1]" >
                    <sui-table-cell><sui-checkbox v-model="selected"  :value="cartItemList[index].keysProduct"/></sui-table-cell>
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
                                        style="cursor:pointer"
                                        @click="removeItem(key.keysProduct)">
                                        </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        </div>
        <h5 style="margin-left:1100px; font-weight:700; margin-top:40px">Total: {{this.total()}} .00 THB</h5>
        <button class="checkout" @click="checkout">CHECKOUT</button>
        </div>


    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
    </b-modal>

    <b-modal ref="my-modal1" hide-footer title="Delete Confirmation">
      <div class="d-block text-center">
        <p>Are you sure you want to delete this item?</p>
      </div>
      <b-button  @click="hideModal1">Cancel</b-button>
      <b-button  >Delete</b-button>
    </b-modal>



    </div>
</template>

<script>
import navbar from "../components/navbar"
// import firebase from "../firebase"
// import {auth} from "../firebase"
import { mapGetters , mapActions} from "vuex";
import store from "../store"
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
            product_unit_price : [],
            check : false,
            name_shop_list : [],
            name_shop_list_uni : [],
            selected: [],

            sellected_product : []
        }
    },
    components : {
        navbar
    },

    //getting product list from cart store
    computed : {
        ...mapGetters([
            'cartItemList',
            'cartValue',
            'getSummaryCart'
        ])
    },
    methods: {
        total(){
            var unit_price = 0
            for(var j = 0; j < this.cartItemList.length ; j++){
                for(var i = 0 ; i< this.selected.length ; i++){
                    if(this.cartItemList[j].keysProduct == this.selected[i]){
                       
                        unit_price +=  this.cartItemList[j].product_unit_price  * this.cartItemList[j].quantity
                    }
                }
              
            }
            store.commit("SET_CART_VALUE" , unit_price)
            return unit_price 
        },
        totalOrder(){

            for(var i = 0 ; i< this.selected.length ;i++){
                console.log(this.selected[i])
            }
            return this.selected

        },
        checkout(){
            //check is user logged in   
            this.check = true
            store.commit("SET_CHECK_STATE",{
                check : this.check
            })

            for(var i=0;i<this.selected.length;i++){
                for(var j=0;j<this.cartItemList.length;j++){
                    if(this.selected[i]==this.cartItemList[j].keysProduct)
                    store.commit("SET_SUMMARY_PAGE_FROM_CART",{
                        keysProduct : this.selected[i],
                        product_detail : this.cartItemList[j].product_detail,
                        product_name : this.cartItemList[j].product_name,
                        product_image : this.cartItemList[j].product_image,
                        product_unit_price : this.cartItemList[j].product_unit_price,
                        sellerUid : this.cartItemList[j].sellerUid,
                        seller_name_shop : this.cartItemList[j].seller_name_shop,
                        quantity : this.cartItemList[j].quantity,
                        status : { return_product : 
                                    {  check_status : false }
                                }
            })
                }
            }
            console.log(this.getSummaryCart)
            if(this.selected == []){
                this.$refs['my-modal'].show()                
            }else{
                this.$router.replace('/summary') 
            }
           
            


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
        beforeDelete(){
            this.$refs['my-modal1'].show()
        },
        hideModal1(){
            this.$refs['my-modal1'].hide()
        }
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



   
    mounted() {
        this.totalOrder()
         console.log("hello")
        console.log(this.cartItemList.length)
        for(var i =0;i<this.cartItemList.length;i++){
            this.name_shop_list[i] = this.cartItemList[i].seller_name_shop
            console.log(this.name_shop_list[i]) 
            
           // [...new Set(numbers)]
        }
        this.name_shop_list_uni = [...new Set(this.name_shop_list)]
        console.log(this.name_shop_list_uni)
       
     
    },

    
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