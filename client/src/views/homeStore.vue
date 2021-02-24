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
    <router-link :to="{name : 'atstore' , params : {idStore : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black">AT STORE</router-link>
    <br>
    <br> 
    <router-link to="/returnStore" style="margin-left:100px; font-size:17px; color:black">RETURN</router-link>
    <br>
    <br>
    <router-link to="/" style="margin-left:100px; font-size:17px; color:black">FINANCE</router-link>
    <router-view></router-view>

    <div id="dashBoardStore">
    <h3 style="font-weight:600">TODO</h3>
    <div id="todo1">
      <sui-grid :columns="3" id="todo">
        <sui-grid-row stretched>
          <sui-grid-column>
            <sui-segment>
              <!-- <img src="../assets/verifyStore.png" :width="60" id="img1"> -->
              <h2 style="text-align:center; margin-top:15px"></h2>
              <h3 style="text-align:center; margin-top:180px">During Shipment</h3>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment >
              <!-- <img src="../assets/verifySlip.png" :width="60" id="img1"> -->
              <h2 style="text-align:center; margin-top:15px"></h2>
              <h3 style="text-align:center; margin-top:180px">At Store</h3>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment style="height:250px">
              <!-- <img src="../assets/banking.png" :width="60" id="img1"> -->
              <h2 style="text-align:center; margin-top:15px"></h2>
              <h3 style="text-align:center; margin-top:180px; ">Return</h3>
            </sui-segment>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </div>
  </div>



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
      beforeCreate() {
      console.log("before Create")
    },
    created() {
      console.log("create")
    },


}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
} 
#dashBoardStore{
  position: relative;
  left: 350px;
  width: 1000px;
  top:-150px

}
</style>