<template>
  <div>
  <sui-menu tabular>
    <a
      is="sui-menu-item"
      v-for="item in items"
      :key="item"
      :active="isActive(item)"
      :content="item"
      @click="select(item)"
    />
    </sui-menu>

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
      allOrderCustomer
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
  },
}

</script>
