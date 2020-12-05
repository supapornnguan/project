<template>
  <div class="ui secondary menu" id="nav" style="background-color:#0F4C81; height:80px">
    <router-link to="/" class="ui item" style="color:#FFFFFF">HOME</router-link>
    <router-link to="/sellerHome" class="ui item" style="color:#FFFFFF">SELLER CENTER</router-link>
    <h1 id="logo" style="color:#FFFFFF" >SHOPAHOLIC</h1>
    <div class="right menu">
    <router-link to="/userRegis"  class="ui item"  v-if="!user.loggedIn" style="color:#FFFFFF">REGISTER</router-link>
    <router-link to="/userlogin" class="ui item" v-if="!user.loggedIn" style="color:#FFFFFF">LOGIN</router-link>
    <p v-if="user.loggedIn" class="ui item"><a @click="logout"  style="color:#FFFFFF">LOGOUT</a></p>
  </div>
  <img src="../assets/mycart.png" class="cart" v-if="user.loggedIn" @click="myCart" >
  <img src="../assets/user.png" id="Myaccount" v-if="user.loggedIn" @click="myaccount">
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
#logo{
  position: relative;
  left: 400px;
  top: 20px;
} 
.cart{
  position: relative;
  left: -120px;
  top: 90px;
  width: 40px;
  height: 40px;
}
#Myaccount{
  position: relative;
  left: -100px;
  top: 90px;
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
</style>