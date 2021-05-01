<template>
  <div>
    <div
      class="ui secondary menu"
      style="background-color:#542e71; height:90px; margin-bottom:70px"
       v-if="windowWidth>= 990"
    >
      <router-link
        to="/"
        class="ui item"
        style="position:absolute; margin-left:10px; color:#FFFFFF"
        >HOME</router-link
      >
      <router-link
        to="/sellerHome"
        class="ui item"
        style="position:absolute; margin-left:90px; color:#FFFFFF"
        target="_blank"
        >SELLER CENTER</router-link
      >
      <h1
        style="color:#FFFFFF; font-family: 'Michroma', cursive; font-size:40px; margin:auto; cursor:pointer;"
      >
        SHOPAHOLIC
      </h1>

      <router-link
        to="/userRegis"
        class="ui item"
        v-if="!user.loggedIn"
        style="position:absolute; right:100px; color:#FFFFFF"
        >REGISTER</router-link
      >
      <router-link
        to="/userlogin"
        class="ui item"
        v-if="!user.loggedIn"
        style="position:absolute; right:20px; color:#FFFFFF"
        >LOGIN</router-link
      >

      <div style="position: absolute; right: 5%;">
        <button id="logout" v-if="user.loggedIn" @click="logout">LOGOUT</button>
      </div>

      <div style="position: absolute; right: 3%;">
        <router-link to="/myCart"
          ><img src="../assets/cart_icon.svg" class="cart" v-if="user.loggedIn"
        /></router-link>
        <div class="circle" v-if="(cartList.length != 0) & user.loggedIn">
          {{ cartList.length }}
        </div>
      </div>

      <div style="position: absolute; right: 0%;">
        <img
          src="../assets/user_icon.svg"
          id="Myaccount"
          style="cursor:pointer;"
          v-if="user.loggedIn"
          @click="myaccount"
        />
      </div>
    </div>

    <div
      class="ui secondary menu"
      style="background-color:#542e71; height:90px;"
      v-if="windowWidth<= 990"
    >
     <h1
        style="color:#FFFFFF; font-family: 'Michroma', cursive; font-size:40px; margin:auto; cursor:pointer;"
      >
        SHOPAHOLIC
      </h1>

<img src="https://gymgarage.in/Assets/white-menu-icon-12.png" :width="70" :height="60" style="margin-top:15px; margin-left:20px; cursor:pointer;"  v-b-toggle.sidebar-backdrop>

    <b-sidebar
      id="sidebar-backdrop"
      :backdrop-variant="variant"
      bg-variant="dark"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
         <router-link
        to="/"
        style="text-decoration: none; "
        ><p style="text-align:center; font-size:15px; font-weight:800; color:#FFF;"
            >HOME</p> </router-link
        >
        <br>

        <router-link
        to="/sellerHome"
        target="_blank"
         style="text-decoration: none;"
        ><p style="text-align:center; font-size:15px; font-weight:800; color:#FFF">SELLER CENTER</p></router-link
        >
      <br>


        <router-link
        to="/userRegis"
        v-if="!user.loggedIn"
        style="text-decoration: none;"
        ><p style="text-align:center; font-size:15px; font-weight:800; color:#FFF"> REGISTER</p></router-link
        >
        <br>

        <router-link
        to="/userlogin"
        v-if="!user.loggedIn"
         style="text-decoration: none;"
        ><p style="text-align:center; font-size:15px; font-weight:800; color:#FFF">LOGIN</p></router-link
      >



        <router-link to="/myCart"
        v-if="user.loggedIn"
        style="text-decoration: none;"
          ><p style="text-align:center; font-size:15px; font-weight:800; margin-top:-17px; color:#FFF"
             >MY CART<p/></router-link>



      <button id="logout1" v-if="user.loggedIn" @click="logout">LOGOUT</button>

  




  




      </div>
    </b-sidebar>

  

    </div>

  </div>
</template>

<script>

import { auth } from "../firebase";
import { mapGetters, mapActions } from "vuex";
import firebase from "../firebase";
import store from "../store";
export default {
  name: "navigation",
  computed: {
    ...mapGetters({
      user: "users",
      user1: "getUserloggedIn",
      cartList: "cartItemList",
    }),
  },
  // beforeMount() {
  //   this.userid =  auth.currentUser.uid
  //   console.log(this.cartlist)

  // },
  data() {
    return {
      userid: "",
      key_product: {},
      key_product_list: [],
      number_product: "",
      timer: null,
      shownav: false,
      windowWidth : window.innerWidth,
      txt : "",
      hover: false,
      variant: 'dark',
      variants: [
          'dark',
        ]
    };
  },
   watch : {
     windowWidth(newWidth, oldWidth) {
     this.txt = `it changed to ${newWidth} from ${oldWidth}`;
    }

   },

mounted() {
  this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
},
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },

  methods: {
    ...mapActions(["updateCart", "clearCart"]),
   onResize() {
      this.windowWidth = window.innerWidth
    },
    logout() {
      this.userid = auth.currentUser.uid;
      auth.signOut().then(() => {
        store.commit("SET_LOGGED_IN", false);
        console.log("log out !!!");
        console.log(this.user1);
        this.$router.replace("/").catch(() => {});
        const item = JSON.parse(localStorage.getItem("cartItem") || "[]");
        if (this.user1 == false) {
          firebase.ref("user/" + this.userid + "/cart/").update(item);
          // this.clearCart()
          this.$router.replace("/").catch(() => {});
        }
      });
      localStorage.clear();
    },
    myCart() {
      // this.$router.replace('myCart')
      console.log(this.user.loggedIn);
    },
    myaccount() {
      this.$router.push({
        name: "myAccountCustomer",
        params: { userid: auth.currentUser.uid },
      });
      // this.$router.replace('MyAccountCustomer')
      console.log(auth.currentUser.uid);
    },
 
  },
};
</script>

<style scoped>
/* #logo{
  text-align: c;
}  */
.cart {
  position: relative;
  left: -180px;
  top: 25px;
  width: 40px;
  height: 40px;
}
#Myaccount {
  position: relative;
  left: -160px;
  top: 25px;
  width: 40px;
  height: 40px;
}
.circle {
  position: absolute;
  right: 170px;
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
#logout {
  background-color: white;
  border-color: white;
  color: #0f4c81;
  font-weight: 600;
  border: 1px solid black;
  height: 30px;
  border-radius: 10px;
  position: relative;
  left: 0px;
  top: 30px;
  font-size: 10px;
}

#logout1 {
  background-color: transparent;
  color: #FFF;
  border: none;
  font-size:15px; font-weight:800;
  margin-left:110px;
  margin-top:5px
}

.active{
   background: green;
}

</style>
