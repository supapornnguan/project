<template>
    <div>
        <navbar/>
        <h1 style="margin-left:100px; font-weight:600">MY CART</h1>
        <sui-table style="width:1200px; margin-left:100px; margin-top:80px">
            <sui-table-header>
                <sui-table-row>
         
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                    <sui-table-header-cell>Unit Price</sui-table-header-cell>
                    <sui-table-header-cell>products available</sui-table-header-cell>
            
                </sui-table-row>
            </sui-table-header>
            
            <sui-table-body>
                <sui-table-row style="height:100px" v-for="(key,index) in this.info" :key="index">
                    <sui-table-cell style="width:190px"><img :src="product_image[index]" :width="150" style="margin-left:30px; margin-right:50px"></sui-table-cell>
                    <sui-table-cell style="width:400px">
                        <p class="info">{{key.product_name}}</p>
                    </sui-table-cell>
                    <sui-table-cell><p style="font-size:15px;">{{key.product_unit_price}} .00 THB</p></sui-table-cell>
                    <sui-table-cell><p style="font-size:15px; margin-left:50px">{{key.product_quantity}}</p></sui-table-cell>
               
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        <p>{{getInfocart}}</p>
        <emptyCart/>


    </div>
</template>

<script>
import navbar from "../components/navbar"
import firebase from "../firebase"
import {auth} from "../firebase"
import emptyCart from "../components/emptyCart"
import {mapGetters} from "vuex"
export default {
    data() {
        return {
            // quantity : 0,
            product_quantity : [],
            product : "",
            keyCart : [],
            keyProduct : [],
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
        emptyCart
    },
    computed : {
        ...mapGetters({
            getInfocart : "getInfocart"
        })
    },
    methods: {
      
    },
     created() {
        firebase.ref('cart').orderByChild('useruid').equalTo(auth.currentUser.uid).on('value', (snapshot) => {
            console.log(snapshot.val())
            this.product = snapshot.val()
            console.log("created!!!!!!")
            console.log("mdskls"+this.product)
            this.keyCart = Object.keys(snapshot.val())
            console.log(this.keyCart)

            for(var i=0 ;i<this.keyCart.length ; i++){
                var k = this.keyCart[i];
                var keyProduct = snapshot.val()[k].keysProduct
                this.keyProduct[i] = keyProduct
                console.log("this is key product"+this.keyProduct[i])

            }
            
            let uniqueArray = this.keyProduct.filter((item, index, array) => {
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