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
                        <input type="number" 
                                id="inputQTY" 
                                :value="cartItemList[index].quantity"
                                @input="updateQuantity(index)"
                                min="0" >
                    </sui-table-cell>
                    <sui-table-cell><p style="font-size:15px;">{{cartItemList[index].product_unit_price}} .00 THB</p></sui-table-cell>
                    <sui-table-cell><img src="../assets/delete.png" 
                                        :width="30" 
                                        @click="removeItem(
                                            cartItemList[index].product_name,
                                        )"></sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
import navbar from "../components/navbar"
import firebase from "../firebase"
import {auth} from "../firebase"
// import emptyCart from "../components/emptyCart"
import { mapGetters , mapActions} from "vuex";
export default {
    data() {
        return {
            // quantity : 0,
            product_quantity : [],
            product : "",
            keyCart : [],
            keysProduct : [],
            Keyunique : [],
            infoProduct : {},
            info:[],
            product_image  : [],
            product_name : [],
            product_unit_price : [],
        }
    },
    components : {
        navbar,
        // emptyCart
    },
    computed : {
        ...mapGetters([
            'cartItemList'
        ])
    },
    methods: {
        addQuantity(addQuantity){
            console.log(addQuantity)
            if(addQuantity < this.product_quantity)
            return addQuantity = addQuantity + 1
            console.log("add")
        },
        miniQuantity(){
            if(this.quantity!=0)
            return this.cartItemList.quantity--
        },
        ...mapActions(['updateCart','removeItemInCart']),
		removeItem() {
			console.log("click remove item")
        },
		updateQuantity(event,index) {
			this.updateCart({
				keysProduct : this.cartItemList[index].keysProduct,
                product_name : this.cartItemList[index].product_name,
                product_image : this.cartItemList[index].product_image,
                product_unit_price : this.cartItemList[index].product_unit_price,
                product_detail : this.cartItemList[index].product_detail,
				quantity: parseInt(event.target.value),
				isAdd: false
			});
		}
    },
    filters : {
    shortDescription(value) {
      if(value && value.length > 100){
        return value.substring(0, 100) + '...';
      }
      else{
        return value;
      }
    }
  },
     created() {
        firebase.ref('cart').orderByChild('useruid').equalTo(auth.currentUser.uid).on('value', (snapshot) => {
            console.log(snapshot.val())
            this.product = snapshot.val()
            console.log("created!!!!!!")
            this.keyCart = Object.keys(snapshot.val())
            console.log(this.keyCart)

            for(var i=0 ;i<this.keyCart.length ; i++){
                var k = this.keyCart[i];
                var keysProduct = snapshot.val()[k].keysProduct
                this.keysProduct[i] = keysProduct
                console.log("this is key product"+this.keysProduct[i])

            }
            
            let uniqueArray = this.keysProduct.filter((item, index, array) => {
                return array.indexOf(item) === index
            })
            this.Keyunique = uniqueArray
            console.log("unique key product"+this.Keyunique)
        })
    },
    mounted() {
        console.log("mounted!!!!")
         for(var j = 0; j<this.Keyunique.length ; j++){
            console.log("hahahahha55555")
            console.log(this.Keyunique[j])
            firebase.ref('product/'+ this.Keyunique[j]).on('value', (snapshot) => {
                console.log(snapshot.val())
                
                var product_image = snapshot.val().product_image
                this.product_image[j] = product_image
                console.log(this.product_image)
                
                // this.info[j] = this.infoProduct
            })
        }
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
    
</style>