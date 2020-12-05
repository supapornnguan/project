<template lang="html">
  <div>
    <navbar/>
      <search/>
      <h1 style="margin-left:100px; left:100px; font-weight:600">{{getProductType}}</h1>
      <h4 style="position:absolute; left:100px; top:300px">FILTER BY</h4>
    <div class="con">

    <sui-card-group :items-per-row="3" >
      <sui-card v-for="(key,index) in keysProduct" :key="index">
        <sui-card-content>
          <img :src="product_image[index]" id="img1" @click="gotoInfoproduct(key)">
          <p style="position:absolute; top:270px">{{product_name[index]}}</p>
          <p style="position:absolute; top:300px">{{product_unit_price[index]}}  THB</p>
          <sui-rating :rating="value" :max-rating="5" style="position:absolute; top:330px; left:10px"/>
          <br>
        <button class= "buttonCart" @click="addToCart(key)">ADD TO CART</button>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
    </div>
  </div>
</template>

<script>
import search from "../components/search"
import navbar from "../components/navbar"
import firebase from "../firebase"
import store from "../store"
import {auth} from "../firebase"
import {mapGetters} from "vuex"
export default {
    data() {
        return {
            value: 1,
            products:{},
            product_id:"",
            keysProduct : [],
            product_name : [],
            product_image : [],
            product_quantity : [],
            product_unit_price: [],
            useruid : "",
            numcart : 0
        }
    },
    methods: {
      gotoInfoproduct(key){
        store.commit('SET_PRODUCT_ID',key)
        this.$router.replace('/infoProduct')
      },
      addToCart(key){
        let newCart = {
          useruid : auth.currentUser.uid,
          keysProduct : key
        }
        firebase.ref("cart/").push(newCart)
        alert("ADD PRODUCT TO CART")
      }
    },
  components:{
      search,
      navbar
  },
  computed: {
    ...mapGetters({
      getProductType : "getProductType"
    })
  },
  mounted() {
    firebase.ref('/product').orderByChild('product_category').equalTo(this.getProductType).on('value', (snapshot) => {
      this.products = snapshot.val()
      this.keysProduct = Object.keys(snapshot.val())
      console.log(this.products)
      console.log(this.keysProduct)
      
      for(var i=0 ; i< this.keysProduct.length ; i++){
        var k = this.keysProduct[i];
        var product_name = this.products[k].product_name
        var product_quantity = this.products[k].product_quantity
        var product_image = this.products[k].product_image
        var product_unit_price = this.products[k].product_unit_price

        this.product_name[i] = product_name
        this.product_quantity[i] = product_quantity
        this.product_image[i] = product_image
        this.product_unit_price[i] = product_unit_price

        console.log(this.product_name[i] = product_name)
        console.log(this.product_image[i] = product_image)
      }
    })
  },
};
</script>

<style scoped>
div.con{
    width: 990px;
    margin-left: 370px;
}
#filterBy{
    text-align: left;
    margin-left: 60px;
}
#types{
    text-align: left;
    margin-top: 20px;
    margin-left: 60px;
}
div.ui.card{
    height: 400px;
}
.buttonCart{
    background-color: white;
    border-radius: 10px;
    border: solid black 1px;
    width: 170px;
    padding: 5px;
    position: absolute;
    top: 350px;
    left: 70px;
}
#img1{
  border: none;
  width: 250px;
}
</style>