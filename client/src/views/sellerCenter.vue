<template lang="html">
<div>
  <navbar/>
  <br>
  <h1 is="sui-header" id="positionCenter">SHOPAHOLIC SELLER CENTER</h1>
  <br>
  <sui-grid>
    <sui-grid-column :width="3">
      <sui-menu fluid vertical tabular>
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
        <!-- ADD PRODUCT -->
        <addProduct v-if="active === 'ADD PRODUCT'">
        </addProduct>
        <!-- DASH BOARD -->
        <dashBoard v-if="active === 'DASH BOARD'">
        </dashBoard>
        <!-- MY ORDERS -->
        <myOrders v-if="active === 'MY ORDERS'">
        </myOrders>
        
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
</div>
</template>

<script>
import dashBoard from "../components/dashBoard"
import addProduct from "../components/addProduct"
import myOrders from "../components/myOrders"
import navbar from "../components/navbar"
export default {
  data() {
    return {
      items: ['DASH BOARD', 'ADD PRODUCT', 'MY ORDERS', 'MY PERSONAL', 'MY SHOP', 'FINANCE'],
      active: 'DASH BOARD',
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
  components:{
      dashBoard,
      addProduct,
      myOrders,
      navbar

  }
};
</script>

<style>
#positionCenter{
    text-align: center;
}  
</style>