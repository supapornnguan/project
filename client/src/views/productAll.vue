<template lang="html">
  <div>
    

    <navbar/>
     <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>
      <!-- <search/> -->

    <!-- <input type="text" v-model="search"> -->
      <div style="position:absolute; top:130px; width:400px; margin-left:550px;">
    <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
  </div>




      <h1 style="position:absolute; left:100px; font-weight:600; margin-top:100px">{{this.$route.params.category}}</h1>
      <!-- <h4 style="position:absolute; left:100px; top:300px">FILTER BY</h4> -->
    <div class="con">
    
    <sui-card-group :items-per-row="3" style="margin-top:120px" >
      <sui-card 
        v-for="(key,index) in resultQuery" 
        :key="index" 
        style="height:490px">
        
          <img :src="resultQuery[index].product_image" id="img1" @click="gotoInfoproduct(keysProduct[index])" :width="280" :height="230">
          <p style="position:absolute; top:270px; font-weight:800">{{resultQuery[index].product_name}}</p>
          <p style="position:absolute; top:315px">{{resultQuery[index].product_detail | shortDescription}}</p>
          <p style="position:absolute; top:380px">{{resultQuery[index].product_unit_price}}  THB</p>
          <sui-rating :rating="value" :max-rating="5" style="position:absolute; top:410px; left:10px"/>
        <button class= "buttonCart" @click="addItem(index)" style="position:absolute; top:440px; ">ADD TO CART</button>
      </sui-card>
    </sui-card-group>
    </div>
  </div>
</template>

<script>

// class Post {
//   constructor(title, link, author, product_image) {
//     this.title = title;
//     this.link = link;
//     this.author = author;
//     this.product_image = product_image;
//   }
// }

import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// import search from "../components/search"
import navbar from "../components/navbar"
import firebase from "../firebase"

// import store from "../store"
// import {auth} from "../firebase"
 import { mapActions} from "vuex"

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
            sellerUid : [],
            status : "ordered",
            seller_name_shop : [],
            getkey : "",
            isLoading : true,
            search : "",
            product_list : [],
            searchQuery: null,
            detail : []

        }
    },

    methods: {
      //go to infomation of product when click on image
      gotoInfoproduct(key){
        // store.commit('SET_PRODUCT_ID',key)
        // this.$router.replace('/infoProduct')
        this.$router.push({name : "infoProduct" , params : {productId : key}})
      },

      nameFilter () {
        let text = this.search.trim()
        return this.product_name.filter(item => {
          return item.product_name.indexOf(text) > -1
      })


      },
    

      ...mapActions(['updateCart']),
      //add product to the cart when click ADD TO CART button
      addItem(index) {
      const order = {
        keysProduct : this.keysProduct[index],
        product_name : this.product_name[index],
        product_image : this.product_image[index],
        product_unit_price : this.product_unit_price[index],
        product_detail : this.product_detail[index],
        sellerUid : this.sellerUid[index],
        status : this.status,
        seller_name_shop : this.seller_name_shop[index],
        quantity: 1,
        isAdd: true
      };
      console.log(order.quantity)
      this.updateCart(order);
    }
    },
  components:{
      // search,
      navbar,
      Loading
  },
  //getting type of product
  computed: {
      resultQuery() {
      if(this.searchQuery){
        return this.detail.filter((item)=>{
        return item.product_name.toLowerCase().includes(this.searchQuery.toLowerCase());
      })
      }else{
        return this.detail;
      }
}
    

  },
  //Filtering description of product
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
    console.log(this.$route.params.category)
    this.getkey = this.$route.params.category
    console.log(this.getkey)
    
  },
  mounted() {
    // this.getProducts();
   
    //geting all product from database
    this.isLoading = true
    firebase.ref('product/').orderByChild('product_category').equalTo(this.$route.params.category).on('value', (snapshot) => {
      this.products = snapshot.val()
      this.keysProduct = Object.keys(snapshot.val())
      // console.log("this is keyProduct "+this.keysProduct)
      
      for(var i=0 ; i< this.keysProduct.length ; i++){
        var k = this.keysProduct[i];
        var product_name = this.products[k].product_name
        var product_quantity = this.products[k].product_quantity
        var product_image = this.products[k].product_image
        var product_unit_price = this.products[k].product_unit_price
        var product_detail = this.products[k].product_detail
        var sellerUid = this.products[k].sellerUid
        var seller_name_shop = this.products[k].seller_name_shop

       

        this.product_name[i] = product_name
        this.product_quantity[i] = product_quantity
        this.product_image[i] = product_image
        this.product_unit_price[i] = product_unit_price
        this.product_detail[i] = product_detail
        this.sellerUid[i] = sellerUid
        this.seller_name_shop[i] = seller_name_shop

        var detailProduct = {
          product_name : this.product_name[i],
          product_image : this.product_image[i],
          product_unit_price : this.product_unit_price[i],
          product_detail : this.product_detail[i],
        }

        this.detail.push(detailProduct)
      }
      console.log(this.detail)
       this.isLoading = false

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