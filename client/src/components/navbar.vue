<template>
  <div class="ui secondary menu" style="background-color:#542e71; height:90px;" >
    <router-link to="/" class="ui item" style="color:#FFFFFF">HOME</router-link>
    <router-link to="/sellerHome" class="ui item" style="color:#FFFFFF">SELLER CENTER</router-link>
    
       <h1 id="logo" style="color:#FFFFFF; font-family: 'Michroma', cursive; font-size:40px; margin-left:310px; margin-top:15px">SHOPAHOLIC</h1>

   
    <div class="right menu">
    <router-link to="/userRegis"  class="ui item"  v-if="!user.loggedIn" style="color:#FFFFFF">REGISTER</router-link>
    <router-link to="/userlogin" class="ui item" v-if="!user.loggedIn" style="color:#FFFFFF">LOGIN</router-link>
    <button id="logout" v-if="user.loggedIn" @click="logout">LOGOUT</button>
    <!-- <p v-if="user.loggedIn" class="ui item"><a @click="logout"  style="color:#FFFFFF;">LOGOUT</a></p> -->
    <router-link to="/myCart"><img src="../assets/cart_icon.svg" class="cart" v-if="user.loggedIn"></router-link>
    <div class="circle" v-if="cartList.length!=0 & user.loggedIn">{{cartList.length}}</div>
    <img src="../assets/user_icon.svg" id="Myaccount" v-if="user.loggedIn" @click="myaccount">
    <!-- <p>{{userid}}</p> -->
  </div>
  
</div>
</template>

<script>
import {auth} from  "../firebase";
import { mapGetters , mapActions } from "vuex";
import firebase from "../firebase"
import store from "../store"
export default {
  name : "navigation",
  computed: {
    ...mapGetters({
      user : "users",
      cartList : "cartItemList",
      user1 : "getUserloggedIn",
      cartlist : "cartItemList"
    }),
  },
  // beforeMount() {
  //   this.userid =  auth.currentUser.uid
  //   console.log(this.cartlist)
    
  // },
  data() {
    return {
      userid : "",
      key_product : {},
      key_product_list : []

    }
  },

  beforeMount() {
    
    // if(this.user1 == true){
    //   this.userid =  auth.currentUser.uid
    //   firebase.ref("user/" + this.userid + "/cart/").on("value" , snapshot => {
    //     console.log(snapshot.val())
    //     this.key_product = snapshot.val()
    //     this.key_product_list = Object.keys(this.key_product)
    //     for(var i = 0 ; i< this.key_product_list.length ; i++){
    //       var k = this.key_product_list[i]
    //       // var keysProduct = this.key_product[k].keysProduct
    //       const order = {
    //         keysProduct : this.key_product[k].keysProduct,
    //         product_name : this.key_product[k].product_name,
    //         product_image : this.key_product[k].product_image,
    //         product_unit_price : this.key_product[k].product_unit_price,
    //         product_detail : this.key_product[k].product_detail_non_split,
    //         sellerUid : this.key_product[k].sellerUid,
    //         status : this.key_product[k].status,
    //         seller_name_shop : this.key_product[k].seller_name_shop,
    //         quantity: this.key_product[k].quantity,
    //         isAdd: true
    //     };
      
    //       this.updateCart(order);

    //       // console.log(keysProduct)
    //     }

    //   })
    // }
  
  },

  methods: {
    ...mapActions(['updateCart','clearCart']),

    logout(){
      this.userid =  auth.currentUser.uid
      auth.signOut()
          .then(()=>{
            store.commit("SET_LOGGED_IN" , false)
            console.log("log out !!!")
            console.log(this.user1)
            this.$router.replace('/').catch(()=>{});
            if(this.user1 == false){
              firebase.ref("user/" + this.userid  + "/cart/").update(this.cartlist)
              // this.clearCart()
              this.$router.replace('/').catch(()=>{});
            }
            
          })
    },
    myCart(){
      // this.$router.replace('myCart')
      console.log(this.user.loggedIn)
    },
    myaccount(){
      this.$router.push({name: "myAccountCustomer" , params : {userid : auth.currentUser.uid}})
      // this.$router.replace('MyAccountCustomer')
      console.log(auth.currentUser.uid)
    },
}
}
</script>

<style scoped>
/* #logo{
  text-align: c;
}  */
.cart{
  position: relative;
  left: -180px;
  top: 25px;
  width: 40px;
  height: 40px;
}
#Myaccount{
  position: relative;
  left: -160px;
  top: 25px;
  width: 40px;
  height: 40px;
}
.circle {
    position: absolute;
    right: 210px;
    top: 15px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 5px;
    background: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    text-align: center;
    font: 15px Arial, sans-serif;
}
#logout{
  background-color: white;
  border-color: white;
  color : #0F4C81;
  font-weight: 600;
  border : 1px solid black;
  height: 30px;
  border-radius: 10px;
  position: relative;
  left: 0px;
  top: 30px;
  font-size: 10px;
}
</style>