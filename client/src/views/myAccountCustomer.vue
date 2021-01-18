<template>
<div >
  <navbar/>

  <sui-grid style="margin-top:70px">
    <sui-grid-column :width="3">
      <sui-menu fluid vertical tabular>
      <!-- <img class="imageIconAccount" src="../assets/user.png" width="50px" height="50px">
      <img class="imageIconAccount" src="../assets/purchase-order.png" width="50px" height="50px">
      <img class="imageIconAccount" src="../assets/bell.png" width="50px" height="50px">
      <img class="imageIconAccount" src="../assets/box.png" width="50px" height="50px"> -->
        <a
          v-for="item in items"
          :key="item"
          is="sui-menu-item"
          :content="item"
          :active="isActive(item)"
          @click="select(item)"
          style="text-align:center"
        />
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column stretched :width="12">
      <sui-segment>
        <!--MY ACCOUNT -->
        <AccountCustomer v-if="active === 'MY ACCOUNT'">
        </AccountCustomer>
        <!-- MY ORDER -->
        <myOrderCustomer v-if="active === 'MY ORDER'">
        </myOrderCustomer> 
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
</div>
</template>

<style>
.imageIconAccount{
  margin-left:5px;
  margin-right:20px;
  margin-bottom: 20px;
}

.WordIcon{
  border: none;
  background-color: none;
}
</style>

<script>
import AccountCustomer from "../components/AccountCustomer"
import myOrderCustomer from "../components/myOrderCustomer"
import navbar from "../components/navbar"
// import firebase from "../firebase"
// import {auth} from "../firebase"
export default {
  data() {
    return {
      items: ['MY ACCOUNT', 'MY ORDER'],
      active: 'MY ACCOUNT',
    };
  },
  components:{
      AccountCustomer,
      myOrderCustomer,
      navbar
  },
  
   methods:{
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;

    },
  },
  mounted() {
    firebase.ref("user/" + auth.currentUser.uid).on("value", snapshot => {
      console.log(snapshot.val())
    })
  },
};
</script>