<template>
  <div>
    <sui-grid>
    <sui-grid-column :width="4">
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
        <delivery v-if="active=='DURING SHIPMENT' "></delivery>
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
  </div>
</template>

<script>
import delivery from "../components/delivery"
export default {
  data() {
    return {
      items: ['DURING SHIPMENT', 'AT STORE', 'RETURN', 'FINANCE'],
      active: 'DURING SHIPMENT',
    }
  },
  components : {
    delivery
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
<style scoped>

</style>