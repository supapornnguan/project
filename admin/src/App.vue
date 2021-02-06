<template>
  <div id="app">
    <h1 style="font-weight:600">ADMIN SHOPAHOLIC</h1>
    <div>
  <b-card no-body>
    <b-tabs pills card vertical>
      <b-tab title="Tab 1" active ><b-card-text>Tab contents 1</b-card-text></b-tab>
      <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</div>
    <div id="menuAdmin">
      <br>
      <div id="divvv">
        <!-- <img src="./assets/dashboard.png" id="iconimage"> -->
        <router-link to="/" id="menu1">DASHBOARD</router-link>
      </div>
      <div id="divvv">
        <router-link to="/sellerManageHome" id="menu1">SELLER MANAGEMENT</router-link>
      </div>
      
      <div id="divvv">
        <router-link to="/userManageHome" id="menu1">USER MANAGEMENT</router-link>
      </div>
      
      <div id="divvv">
        <router-link to="/storeManageHome" id="menu1">STORE MANAGEMENT</router-link>
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
  background-color: 	#0F4C81;
  color:#FFFF;
  padding: 20px;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
}
#menuAdmin{
  width: 350px;
  height: 1000px;
  margin-top: 30px;
  position: relative;

}
#menu1{
  color: black;
}
#divvv{
  text-align: center;
  border: gray solid 1px;
  padding:10px;
  margin-left: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
}
#iconimage{
  width: 30px;
  position: relative;
  left: 20px;
}

</style>

