<template>
<div>
    <search/>

  <sui-grid>
    <sui-grid-column :width="4">
      <sui-menu fluid vertical tabular>
      <img class="imageIconAccount" src="../assets/user.png" width="50px" height="50px">
      <img class="imageIconAccount" src="../assets/purchase-order.png" width="50px" height="50px">
      <img class="imageIconAccount" src="../assets/bell.png" width="50px" height="50px">
      <img class="imageIconAccount" src="../assets/box.png" width="50px" height="50px">
        <a
          v-for="item in items"
          :key="item"
          is="sui-menu-item"
          :content="item"
          :active="isActive(item)"
          @click="select(item)"
        />
      </sui-menu>
    </sui-grid-column>
    <sui-grid-column stretched :width="12">
      <sui-segment>
        <!--MY ACCOUNT -->
        <AccountCustomer v-if="active === 'MY ACCOUNT'">
        </AccountCustomer>
        <!-- MY PURCHASES -->
        <myPurchaseCustomer v-if="active === 'MY PURCHASES'">
        </myPurchaseCustomer>
        <!-- NOTIFICATIONS -->
        <Notification v-if="active === 'NOTIFICATIONS'">
        </Notification>
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
import search from "../components/search"
import AccountCustomer from "../components/AccountCustomer"
import myPurchaseCustomer from "../components/myPurchaseCustomer"
import Notification from "../components/Notification"
import myOrderCustomer from "../components/myOrderCustomer"
export default {
  data() {
    return {
      items: ['MY ACCOUNT', 'MY PURCHASES', 'NOTIFICATIONS', 'MY ORDER'],
      active: 'MY ACCOUNT',
    };
  },
  components:{
      search,
      AccountCustomer,
      myPurchaseCustomer,
      Notification,
      myOrderCustomer,
  },
  methods:{
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
};
</script>