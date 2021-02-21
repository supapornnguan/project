<template>
  <div>
    <div style="background-color:#0F4C81; height:80px;">
    <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>
    <p>{{this.$route.params.idStore}}</p>
    <br>
    <br>
    <!-- :to="{ name: 'user', params: { userId: 123 }}" -->
    <router-link :to="{name : 'detaildeliStore' , params : {idStoreDeli : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black">DURING SHIPMENT</router-link>
    <br>
    <br>
    <router-link to="/atstore" style="margin-left:100px; font-size:17px; color:black">AT STORE</router-link>
    <br>
    <br> 
    <router-link to="/returnStore" style="margin-left:100px; font-size:17px; color:black">RETURN</router-link>
    <br>
    <br>
    <router-link to="/" style="margin-left:100px; font-size:17px; color:black">FINANCE</router-link>
    <router-view></router-view>



  </div>
</template>
<script>
import store from "../store"
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  mounted() {
    store.commit("SET_NAME_STORE", {
      idStore : this.$route.params.idStore
    })
  },
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
} 
</style>