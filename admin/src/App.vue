<template>
  <div id="app">
    <h1 style="font-weight:600">ADMIN SHOPAHOLIC</h1>
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
      
      <div id="divv">
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
  height: 1000px;
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

