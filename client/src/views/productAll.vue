<template lang="html">
  <div>
    <navbar/>
      <search/>
      <h1 style="margin-left:100px; left:100px; font-weight:600">{{getProductType}}</h1>
      <h4 style="position:absolute; left:100px; top:300px">FILTER BY</h4>
    <div class="con">
    
    <sui-card-group :items-per-row="3" >
      <sui-card 
        v-for="(key,index) in keysProduct" 
        :key="index" 
        style="height:490px">

        <sui-card-content v-if="getProductType == 'WOMEN' ">
          <img :src="product_image[index]" id="img1" @click="gotoInfoproduct(key)" :width="280" :height="290">
          <p style="position:absolute; top:270px">{{product_name[index]}}</p>
          <p style="position:absolute; top:315px">{{product_detail[index] | shortDescription}}</p>
          <p style="position:absolute; top:315px">{{product_unit_price[index]}}  THB</p>
          <sui-rating :rating="value" :max-rating="5" style="position:absolute; top:350px; left:10px"/>
        <button class= "buttonCart" @click="addItemToCart(key)" style="position:absolute; top:390px; ">ADD TO CART</button>
        </sui-card-content>

        <sui-card-content v-if="getProductType != 'WOMEN' ">
          <img :src="product_image[index]" id="img1" @click="gotoInfoproduct(key)" :width="280" :height="230">
          <p style="position:absolute; top:270px; font-weight:800">{{product_name[index]}}</p>
          <p style="position:absolute; top:315px">{{product_detail[index] | shortDescription}}</p>
          <p style="position:absolute; top:380px">{{product_unit_price[index]}}  THB</p>
          <sui-rating :rating="value" :max-rating="5" style="position:absolute; top:410px; left:10px"/>
        <button class= "buttonCart" @click="addItem(index)" style="position:absolute; top:440px; ">ADD TO CART</button>
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
// import {auth} from "../firebase"
 import {mapGetters, mapActions} from "vuex"
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
            product_detail : [],
            useruid : "",
            numcart : 0,
           
        }
    },
    methods: {
      gotoInfoproduct(key){
        store.commit('SET_PRODUCT_ID',key)
        this.$router.replace('/infoProduct')
      },

      ...mapActions(['updateCart']),
      addItem(index) {
      const order = {
        keysProduct : this.keysProduct[index],
        product_name : this.product_name[index],
        product_image : this.product_image[index],
        product_unit_price : this.product_unit_price[index],
        product_detail : this.product_detail[index],
        quantity: 1,
        isAdd: true
      };
      this.updateCart(order);
      console.log(order);
    }
      
      // ...mapActions(["addItemToCart", "getProducts"]),
      // addToCart(key,product_image,product_name,product_unit_price){
      //   store.commit('SET_INFO_CART',{
      //     product_image : product_image,
      //     product_name : product_name,
      //     product_unit_price : product_unit_price
      //   })
      //   console.log(key)
      //   console.log(product_name)
        
        // let keyProduct1 = [{
        //   key
        // }]
        // let newCart = [{
        //   useruid : auth.currentUser.uid,
        //   keysProduct : keyProduct1
        // }]
        // console.log(newCart)
        // let test = firebase.ref("cart/").child('useruid').equalTo(auth.currentUser.uid).update(newCart)
        // console.log(test)
        // alert(key)
      // }
    },
  components:{
      search,
      navbar
  },
  computed: {
    ...mapGetters({
      getProductType : "getProductType",
    }),
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
  mounted() {
    // this.getProducts();
    firebase.ref('product/').orderByChild('product_category').equalTo(this.getProductType).on('value', (snapshot) => {
      this.products = snapshot.val()
      this.keysProduct = Object.keys(snapshot.val())
      console.log("this is keyProduct "+this.keysProduct)
      
      for(var i=0 ; i< this.keysProduct.length ; i++){
        var k = this.keysProduct[i];
        var product_name = this.products[k].product_name
        var product_quantity = this.products[k].product_quantity
        var product_image = this.products[k].product_image
        var product_unit_price = this.products[k].product_unit_price
        var product_detail = this.products[k].product_detail

        this.product_name[i] = product_name
        this.product_quantity[i] = product_quantity
        this.product_image[i] = product_image
        this.product_unit_price[i] = product_unit_price
        this.product_detail[i] = product_detail

        console.log(this.product_name[i] = product_name)
        console.log(this.product_image[i] = product_image)
        console.log(this.product_detail[i] = product_detail)
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