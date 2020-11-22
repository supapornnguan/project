<template>
  <div>
    <sui-menu pointing>
      <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
      />
      <sui-menu-menu position="right">
        <sui-menu-item>
          <sui-input transparent icon="search" placeholder="Search..." />
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>

    <sui-segment>
      <!-- ALL -->
      <myOrdersAll v-if="active === 'ALL'">
      </myOrdersAll> 
      <!-- PICKUP -->
      <myOrdersPickup v-if="active === 'PICKUP'">
      </myOrdersPickup>
      <!-- SHIPPING -->
      <myOrdersShipping v-if="active === 'SHIPPING'">
      </myOrdersShipping>
    </sui-segment>
  </div>
</template>

<script>
import myOrdersAll from "../components/myOrdersAll"
import myOrdersPickup from "../components/myOrdersPickup"
import myOrdersShipping from "../components/myOrdersShipping"

export default {
  name: 'PointingMenuExample',
  data() {
    return {
      active: 'ALL',
      items: ['ALL', 'PICKUP', 'SHIPPING'],
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
    myOrdersAll,
    myOrdersPickup,
    myOrdersShipping
  }
};
</script>