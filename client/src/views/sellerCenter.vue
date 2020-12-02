<template lang="html">
<div>
  <navbar/>
  <br>
  <!-- <h1 is="sui-header" id="positionCenter">SHOPAHOLIC SELLER CENTER</h1> -->
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
import navbar from "../components/navbarSeller"
import firebase from "../firebase"
import store from "../store"
export default {
  data() {
    return {
      items: ['DASH BOARD', 'ADD PRODUCT', 'MY ORDERS', 'MY PERSONAL', 'MY SHOP', 'FINANCE'],
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
          if(name == "MY ORDERS"){
          store.commit("SET_ORDER_BY_PICKUP", {
          branch_selected : this.branch_selected,
          date_time_to_order : this.date_time_to_order,
          product_key : this.product_key,
          sellerUid : this.sellerUid,
          status : this.status,
          total_amount : this.total_amount,
          userid : this.userid,
          quantity : this.quantity
        })
      }
    },
  },
  components:{
      dashBoard,
      addProduct,
      myOrders,
      navbar
  },
   mounted() {
    firebase.ref('pickup_order/').on('value', snapshot => {
      this.infoOrder = snapshot.val()
      this.keyOrder = Object.keys(snapshot.val())
      console.log(this.keyOrder)
      for(var i = 0 ; i<this.keyOrder.length ; i++){
        var k = this.keyOrder[i];
        var branch_selected = this.infoOrder[k].branch_selected;
        var date_time_to_order = this.infoOrder[k].date_time_to_order;
        var product_key = this.infoOrder[k].product_key;
        var sellerUid = this.infoOrder[k].sellerUid;
        var status = this.infoOrder[k].status;
        var total_amount = this.infoOrder[k].total_amount;
        var userid = this.infoOrder[k].userid;
        var quantity = this.infoOrder[k].userid;

        this.branch_selected[i] = branch_selected
        this.date_time_to_order[i] = date_time_to_order
        this.product_key[i] = product_key
        this.sellerUid[i] = sellerUid
        this.status[i] = status
        this.total_amount[i] = total_amount
        this.userid[i] = userid
        this.quantity[i] = quantity
      }
    })
  },
};
</script>

<style>
#positionCenter{
    text-align: center;
}  
</style>