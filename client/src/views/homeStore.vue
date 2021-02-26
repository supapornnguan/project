<template>
  <div>
    <div style="background-color:#0F4C81; height:80px;">
    <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>
    <p>{{this.$route.params.idStore}}</p>
    <br>
    <br>
    <!-- :to="{ name: 'user', params: { userId: 123 }}" -->
    <router-link :to="{name : 'detaildeliStore' , params : {idStoreDeli : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black" @click="check_atstore('DURINGSHIP')">DURING SHIPMENT</router-link>
    <br>
    <br>
    <router-link :to="{name : 'atstore' , params : {idStore : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black" @click="check_atstore('ATSTORE')">AT STORE</router-link>
    <br>
    <br> 
    <router-link :to="{name : 'returnStore' , params : {idStore : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black">RETURN</router-link>
    <br>
    <br>
    <router-link to="/" style="margin-left:100px; font-size:17px; color:black">FINANCE</router-link>
    <router-view></router-view>

    <div id="dashBoardStore">
    <h3 style="font-weight:600; font-size:35px; margin-bottom:20px">TODO</h3>
    <div id="todo1">
      <sui-grid :columns="3" id="todo">
        <sui-grid-row stretched>
          <sui-grid-column>
            <sui-segment raised>
              <!-- <img src="../assets/verifyStore.png" :width="60" id="img1"> -->
              <h3 style="text-align:center; margin-top:25px; font-weight:600">DURING SHIPMENT</h3>
              <h2 style="text-align:center; margin-top:15px; margin-bottom:15px; font-size:70px">1</h2>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment raised>
              <!-- <img src="../assets/verifySlip.png" :width="60" id="img1"> -->
              <h3 style="text-align:center; margin-top:25px; font-weight:600">AT STORE</h3>
              <h2 style="text-align:center; margin-top:15px margin-bottom:15px; font-size:70px">2</h2>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment style="height:200px" raised>
              <!-- <img src="../assets/banking.png" :width="60" id="img1"> -->
              <h3 style="text-align:center; margin-top:25px; font-weight:600">RETURN</h3>
              <h2 style="text-align:center; margin-top:15px; margin-bottom:15px; font-size:70px">3</h2>
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
    check_atstore(check){
      store.commit("CHECK_ATSTORE" , {
        check_atstore : check
      })
    }

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