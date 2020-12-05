<template>
  <div id="app">

    <h1 style="font-weight:600">STORE  PICK-UP</h1>


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

  

    <div id="menuAdmin">
      <br>
      <div id="divvv">
        <router-link to="/" id="menu1">DURING SHIPMENT</router-link>
      </div>

      <div id="divvv">
        <router-link to="/orderAtStore" id="menu1">ORDER AT STORE</router-link>
      </div>
      
      <div id="divvv">
        <router-link to="/OrderReturn" id="menu1">ORDER RETURN</router-link>
      </div>
      
      <div id="divvv">
        <router-link to="/finance" id="menu1">FINANCE</router-link>
      </div>

    </div>
    <router-view/>

  </div>
</template>

<style scoped>
h1{
  text-align: center;
  background-color: 	#DCDCDC;
  padding: 20px;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
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

