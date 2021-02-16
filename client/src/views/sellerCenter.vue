<template lang="html">
<div>
  <navbar/>
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
        <!-- MY SHOP-->
        <myshop v-if="active === 'MY SHOP'">
        </myshop>

        
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
</div>
</template>

<script>
import dashBoard from "../components/dashBoard"
import addProduct from "../components/addProduct"
import myOrders from "../components/myOrders"
import navbar from "../components/navbarSeller"
import myshop from "../components/myshop"
// import store from "../store"
export default {
  data() {
    return {
      items: ['DASH BOARD', 'ADD PRODUCT', 'MY ORDERS', 'MY SHOP', 'FINANCE'],
      active: 'DASH BOARD',
      infoOrder : {},
      keyOrder : [],
      branch_selected : [],
      date_time_to_order : [],
      product_key : [],
      sellerUid : [],
      status : [],
      total_amount : [],
      userid : [],
      quantity : []
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
          this.active = name;
      //     if(name == "MY ORDERS"){
      //     store.commit("SET_ORDER_BY_PICKUP", {
      //     branch_selected : this.branch_selected,
      //     date_time_to_order : this.date_time_to_order,
      //     product_key : this.product_key,
      //     sellerUid : this.sellerUid,
      //     status : this.status,
      //     total_amount : this.total_amount,
      //     userid : this.userid,
      //     quantity : this.quantity
      //   })
      // }
    },
  },
  components:{
      dashBoard,
      addProduct,
      myOrders,
      navbar,
      myshop
  },
};
</script>

<style>
#positionCenter{
    text-align: center;
}  
</style>