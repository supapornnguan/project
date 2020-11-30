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
    <sui-segment>
        <!--Pick-up -->
        <pickupAllCustomer v-if="active === 'Pick-up'">
        </pickupAllCustomer>
        <!-- Shipping -->
        <shippingAllCustomer v-if="active === 'Shipping'">
        </shippingAllCustomer>
      </sui-segment>
  </div>
</template>

<script>
import pickupAllCustomer from "../components/pickupAllCustomer"
import shippingAllCustomer from "../components/shippingAllCustomer"
export default {
  data () {
    return {
      items: ['Pick-up', 'Shipping'],
      active: 'Pick-up',
    }
  },
  components:{
      pickupAllCustomer,
      shippingAllCustomer,
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
