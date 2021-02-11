<template>
  <div>
    <h1 style="margin-bottom:40px">MY ORDER</h1>
  <!-- <sui-menu tabular>
    <a
      is="sui-menu-item"
      v-for="item in items"
      :key="item"
      :active="isActive(item)"
      :content="item"
      @click="select(item)"
    />
    </sui-menu> -->

    <button id="button_pickup">PICK-UP</button>
    <button id="button_shipping">SHIPPING</button>

        <!--Pick-up -->
        <pickupAllCustomer v-if="active === 'Pick-up'">
        </pickupAllCustomer>
        <!-- Shipping -->
        <shippingAllCustomer v-if="active === 'Shipping'">
        </shippingAllCustomer>
        <!-- all -->
        <allOrderCustomer v-if="active === 'All'"/>


  </div>
</template>

<script>
import pickupAllCustomer from "../components/pickupAllCustomer"
import shippingAllCustomer from "../components/shippingAllCustomer"
import allOrderCustomer from "../components/allOrderCustomer"
// import myOrderPickupCus from "../components/myOrderPickupCus"
export default {
  data () {
    return {
      items: ['All','Pick-up', 'Shipping'],
      active: 'All',
    }
  },
  components:{
      pickupAllCustomer,
      shippingAllCustomer,
      allOrderCustomer,
      // myOrderPickupCus
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
    clickPickup(){
      
    }
  },
}

</script>

<style scoped>

#button_pickup{
  
  background-color: white;
  border: 2px solid black;
  width: 100px;
  height: 40px;
  margin-left: -2px;

}
#button_shipping{

  background-color: white;
  border: 2px solid black;
  width: 100px;
  height: 40px;
  margin-left: -2px;
}
  
</style>
