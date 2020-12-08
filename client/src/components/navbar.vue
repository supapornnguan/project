<template>
  <div class="ui secondary menu" id="nav" style="background-color:#0F4C81; height:90px;" >
    <router-link to="/" class="ui item" style="color:#FFFFFF">HOME</router-link>
    <router-link to="/sellerHome" class="ui item" style="color:#FFFFFF">SELLER CENTER</router-link>
    
       <h1 id="logo" style="color:#FFFFFF; font-family: 'Chonburi', cursive; font-size:50px; margin-left:310px; margin-top:15px">SHOPAHOLIC</h1>

   
    <div class="right menu">
    <router-link to="/userRegis"  class="ui item"  v-if="!user.loggedIn" style="color:#FFFFFF">REGISTER</router-link>
    <router-link to="/userlogin" class="ui item" v-if="!user.loggedIn" style="color:#FFFFFF">LOGIN</router-link>
    <button id="logout" v-if="user.loggedIn" @click="logout">LOGOUT</button>
    <!-- <p v-if="user.loggedIn" class="ui item"><a @click="logout"  style="color:#FFFFFF;">LOGOUT</a></p> -->
    <img src="../assets/cart_icon.svg" class="cart" v-if="user.loggedIn" @click="myCart" >
    <img src="../assets/user_icon.svg" id="Myaccount" v-if="user.loggedIn" @click="myaccount">
  </div>
  
</div>
</template>

<script>
import {auth} from  "../firebase";
import { mapGetters } from "vuex";
export default {
  name : "navigation",
  computed: {
    ...mapGetters({
      user : "users"
    })
  },
  methods: {
    logout(){
      auth.signOut()
          .then(()=>{
            this.$router.replace('/')
          })
    },
    myCart(){
      this.$router.replace('myCart')
      console.log(this.user.loggedIn)
    },
    myaccount(){
      this.$router.replace('MyAccountCustomer')
      console.log(this.user.data)
    }
  },
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
.numberCircle {
    position: relative;
    left: -200px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 100px;
    /* display: inline; */
    background: red;
    border: 2px solid red;
    color: white;
    text-align: center;
    font-weight: 900;
    /* font: 32px Arial, sans-serif; */
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