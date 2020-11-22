<template>
  <div class="ui secondary menu" id="nav">
    <router-link to="/" class="ui item">HOME</router-link>
    <router-link to="/sellerHome" class="ui item">SELLER CENTER</router-link>
    <h1 id="logo" >SHOPAHOLIC</h1>
    <div class="right menu">
    <router-link to="/userRegis"  class="ui item"  v-if="!user.loggedIn">REGISTER</router-link>
    <router-link to="/userlogin" class="ui item" v-if="!user.loggedIn">LOGIN</router-link>
    <p v-if="user.loggedIn" class="ui item"><a @click="logout" >LOGOUT</a></p>
  </div>
  <img src="../assets/mycart.png" id="cart" v-if="user.loggedIn" @click="myCart" >
  <img src="../assets/user.png" id="Myaccount" v-if="user.loggedIn">
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
    }
  },
}
</script>

<style scoped>
#logo{
  position: relative;
  left: 400px;
} 
#cart{
  position: relative;
  left: -140px;
  top: 55px;
  width: 40px;
  height: 40px;
}
#Myaccount{
  position: relative;
  left: -110px;
  top: 55px;
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