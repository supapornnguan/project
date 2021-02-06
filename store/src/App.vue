<template>
  <div id="app">
    <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Chonburi', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>
  <br>
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
        This is an stretched grid column. This segment will always match the tab
        height
      </sui-segment>
    </sui-grid-column>
  </sui-grid>
  </div>
</template>

<script>
export default {
  data() {
  return {
    items: ['DURING SHIPMENT', 'AT STORE', 'RETURN', 'FINANCE'],
    active: 'DURING SHIPMENT',
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
};
</script>

<style scoped>
#headerbar{
  position: relative;
  top: 20px;
}
#menuAdmin{
  background-color: #D0D0D0;
  width: 350px;
  margin-top: -8px;
  position: relative;
}
#menu1{
  margin-left: 45px;
  color: black;
}
#divvv{
  padding-bottom: 35px;
}
#iconimage{
  width: 30px;
  position: relative;
  left: 20px;
}
</style>

